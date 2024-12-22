import { Iuser } from "./user.interface"
import { usermodel } from "./user.model"
import bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"

const userRegisterService =async(body:Iuser)=>{
    const result = await usermodel.create(body)
    return result
}
const userLoginService =async(body:Iuser)=>{
    const RegisterUser = await usermodel.findOne({email:body.email})
    if(!RegisterUser){
        throw new Error("this user not exit!")
    }
    const matchPassword = await  bcrypt.compare(body.password, RegisterUser.password)
    if(!matchPassword){
        throw new Error("this password not exit!")
    }
    const token = jwt.sign({
        userID : RegisterUser._id,
        role: RegisterUser.role,
      }, 'secret1234', { expiresIn: 60 * 60 });
    return {token}
}
export const AlluserService ={
    userRegisterService,
    userLoginService
}