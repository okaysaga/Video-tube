import {Router} from "express";
import { registerUser } from "../controllers/user.controlller.js"

import express from "express";


const router = Router()

router.route("/register").post(registerUser);
//router.route("/register").post(loginUser)

export default router;



