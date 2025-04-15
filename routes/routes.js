'use strict'

import { Router } from 'express';
import {
    createUser, deleteUser,
    getUserByEmail,
    getUserByName,
    getUsers,
    registerUser,
    resetPassword,
    updateUser,
} from "../controllers/userController.js";

const router = Router();

// handling the users
router.get('/users', getUsers)
router.get('/user/:username', getUserByName)
router.get('/user/:useremail', getUserByEmail)
router.put('/user/:id', updateUser)

// handling the registration, login and forgotten password of users
router.post('/login', createUser)
router.post('/:id/resetPassword', resetPassword)
router.post('/:id/register', registerUser)
router.delete('/:id/logout', deleteUser)

export default router;