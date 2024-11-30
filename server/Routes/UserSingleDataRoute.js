import express from 'express';
import { getSingleUserData, updateSingleUserData } from '../Controllers/UserSingleDataController.js';

const router = express.Router();
router.get('/user-data/:id', getSingleUserData);
router.patch('/user-data/:id', updateSingleUserData);

export default router;