import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import PostMessage from '../models/postMessage.js';


export const signin= async (req, res)=>{
    const {userName, password} = req.body;

    try {
        const existingUser = await PostMessage.findOne({userName});
        
        //const typeOfUser = await PostMessage.findOne({userName}).get({userType})

        if(!existingUser) return res.status(404).json({message: "User doesn't exist."});

        const isPasswordCorrect= await PostMessage.findOne({password});

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials."});

        const token= jwt.sign({ userName: existingUser.userName, id: existingUser._id, userType: existingUser.userType}, 'test', { expiresIn: "1h"});

        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}