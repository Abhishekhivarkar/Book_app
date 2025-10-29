// import express from "express"
// const router = express.Router()
// import getUser from "../controller/User.controller.js"

// router.post("/signup",getUser)

import express from "express";
const router = express.Router();
import { getUser, login } from "../controller/User.controller.js";

router.post("/signup", getUser);
router.post("/login", login);
export default router;
