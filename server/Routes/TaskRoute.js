import express from 'express';
import { DeleteTaskData, GetEachTaskData, GetTaskData, PostTaskData, UpdateTask, UpdateStageTaskData } from '../Controllers/TaskController.js';

const router = express.Router();

router.get('/', GetTaskData);
router.post('/', PostTaskData);
router.get('/:id', GetEachTaskData);
router.put('/:id', UpdateTask);
router.patch('/:id', UpdateStageTaskData);
router.delete('/:id', DeleteTaskData);

export default router;