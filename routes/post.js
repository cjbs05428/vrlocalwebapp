import express from 'express';
import {getUsers, registerUser, updateUser, deleteUser} from '../controllers/posts.js';

const router = express.Router();


//http://localhost:5000/vrlocal

router.get('/', getUsers);
router.post('/', registerUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;