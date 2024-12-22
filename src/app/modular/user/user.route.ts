import { Router } from "express";
import { AlluserController } from "./user.controller";

const router = Router()
router.post("/register", AlluserController.userRegister)
export const userRouter = router