'use strict'

import { Router } from 'express';
import {
    createUser,
    deleteUser,
    getUserByEmail,
    getUserByName,
    getUsers,
    registerUser,
    updateUser,
    userUpdate,
} from "../controllers/userController.js";

const router = Router();

// handling the users
router.get('/users', getUsers)
router.get('/user/:username', getUserByName)

// updating a user
router.put('/user/:id', updateUser)
router.put('/user/:id/update', userUpdate)

// handling the registration, login and forgotten password of users
router.post('/login', createUser)
router.post('/:id/register', registerUser)
router.delete('/:id/logout', deleteUser)

export default router;