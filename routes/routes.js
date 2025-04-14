'use strict'

import { Router } from 'express';
import {getUserByName, getUsers} from "../controllers/userController.js";

const router = Router();

router.get('/users', getUsers)
router.get('/user/', getUserByName)

export default router;