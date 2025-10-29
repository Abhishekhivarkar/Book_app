import getBook from "../controller/Book.controller.js";
import express from "express";
const router = express.Router();
router.get("/", getBook);

export default router;
