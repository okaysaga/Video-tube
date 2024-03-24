import { Router } from "express";
import { registerUser } from "../controllers/user.controlller.js"

import express from "express";


const router = Router()

//router.post("/register", express.json(), registerUser);

router.route("/register").post(registerUser);
//router.route("/login").post(loginUser)

//router.route("/register").post(loginUser)

export default router



