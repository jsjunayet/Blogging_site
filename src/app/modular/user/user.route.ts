import { Router } from "express";
import { validation } from "../../middleware/validation";
import { uservalidationAll } from "./user.validation";
import { AlluserController } from "./user.controller";

const router = Router()
router.post("/register", validation(uservalidationAll.uservalidation), AlluserController.userRegister)
router.post("/login", AlluserController.userLogin)
export const userRouter = router