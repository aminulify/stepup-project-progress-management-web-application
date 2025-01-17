import express from 'express';
import { DeleteTaskData, GetEachTaskData, GetTaskData, PostTaskData, UpdateTaskStage,  } from '../Controllers/TaskController.js';

const router = express.Router();

router.get('/', GetTaskData);
router.post('/', PostTaskData);
router.get('/:id', GetEachTaskData);
router.patch('/:id', UpdateTaskStage);
router.delete('/:id', DeleteTaskData);

export default router;