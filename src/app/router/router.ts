
import { Router } from "express"
import { userRouter } from "../modular/user/user.route"

const router = Router()
const allRouter =[
    {
        path:"/auth",
        route:userRouter
    }
]
allRouter.forEach((route)=>router.use(route.path, route.route))
export default router