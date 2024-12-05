import express from 'express';
import { GetTaskData } from '../Controllers/TaskController.js';

const router = express.Router();

router.get('/', GetTaskData);

export default router;