import { blogmodel } from "../blog/blog.model";
import { Iblog } from "../blog/blog.interface";
import { usermodel } from "../user/user.model";


const AdminUpdateService = async ( PostID: string, user: { role: string; }) => {
    const exitPost = await usermodel.findById(PostID)
    if(!exitPost){
        throw new Error("this ID not exist")
    }

    if(user.role !== "admin"){
        throw new Error("This user is not Admin.");
    }
    const result = await usermodel.findByIdAndUpdate(
        PostID,
        {isBlocked:true},
        {new:true}
    )
   return result
  };
const AdminDeletedService = async (payload:Partial<Iblog>, PostID: string, user: { role: string }) => {
    const exitPost = await blogmodel.findById(PostID)
    if(!exitPost){
        throw new Error("this ID not exist")
    }
   
    if(user.role !== "admin"){
        throw new Error(`This user is not admin`);
    }
    const result = await blogmodel.findByIdAndDelete(PostID )
   return result
  };

export const AllAdminService ={
 AdminDeletedService,
 AdminUpdateService
}