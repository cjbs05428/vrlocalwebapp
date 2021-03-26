import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const token= req.headers.authorization.split(" ")[1];

        let decodedData;
        decodedData= jwt.verify(token, 'test');
        req.userId = decodedData?.id;
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;