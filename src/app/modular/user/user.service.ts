import { Iuser } from "./user.interface"
import { usermodel } from "./user.model"


const userRegisterService =async(body:Iuser)=>{
    const result = await usermodel.create(body)
    return result
}
export const AlluserService ={
    userRegisterService
}