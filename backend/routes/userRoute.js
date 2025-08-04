import express from "express";
import { userlogin, userSignUp } from "../controllers/userController.js";
import userAuth from '../middlewares/userAuth.js'
const router = express.Router();


router.post('/login', userlogin)
router.post('/signup', userSignUp)

export default router;