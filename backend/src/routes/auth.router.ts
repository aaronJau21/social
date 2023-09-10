import { Router } from "express";
import { register } from "../controllers/Auth/Register.controller";

const router = Router();

router.post("/register", register);

export default router;
