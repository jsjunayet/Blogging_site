import { Request, Response } from "express"
import { AlluserService } from "./user.service"

const userRegister =async(req:Request, res:Response)=>{
    const body = req.body
const data = await AlluserService.userRegisterService(body)
res.status(400).json({
    data:data,
    success:true
})
}
export const AlluserController ={
    userRegister
}