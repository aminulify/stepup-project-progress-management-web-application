import express from "express";
import { createUserData, getUserData } from "../Controllers/UserDataControllers.js";

const router = express.Router();

router.get('/', getUserData);
router.post('/', createUserData);

export default router;