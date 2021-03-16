import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    userName: String,
    password: String,
    email: String,
    address: String,
    contactNumber: String,
    userType: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;