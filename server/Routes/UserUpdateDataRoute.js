import { getUpdatedData, updateUserData } from "../Controllers/UserUpdateDataController.js";
import express from 'express';

const route = express.Router();
route.get('/:id', getUpdatedData);
route.patch('/:id', updateUserData)

export default route;