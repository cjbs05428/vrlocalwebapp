import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';


export const getUsers= async (req, res)=>{
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const registerUser= async (req, res) => {
    const user=req.body;
    
    const newUser = new PostMessage(user);

   try {
       
       const result= await newUser.save();
       const token = jwt.sign({ userName: result.userName, id: result._id}, 'test',);
       res.status(201).json(result); 
   } catch (error) {
       res.status(500).json({message: "Something went wrong. User is not created"});
   }
}

export const updateUser= async (req, res) => {
    const {id: _id} = req.params;
    const user= req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(' No User with that id');

    const updatedUser = await PostMessage.findByIdAndUpdate(_id, { ...user, _id }, {new: true});
    res.json(updatedUser);
}

export const deleteUser= async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(' No User with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'User has been deleted' });
}