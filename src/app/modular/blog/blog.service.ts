import { Schema } from "mongoose";
import { Iblog } from "./blog.interface"
import { blogmodel } from "./blog.model"
import { usermodel } from "../user/user.model";

const blogPostService = async (body: Iblog, user: { userID: Schema.Types.ObjectId; }) => {
    body.author = user.userID; // Ensure `userID` matches the correct ObjectId
    const blogResult = await blogmodel.create(body);
    const result = await blogResult.populate("author", "name email role"); // Ensure `author` matches the schema field
    return result;
  };
const blogGetService = async () => {
   const result = await blogmodel.find().populate("author", "name email role")
   return result
  };
const blogUpdateService = async (payload:Partial<Iblog>, PostID: string, user: { userID: Schema.Types.ObjectId; }) => {
    const exitPost = await blogmodel.findById(PostID)
    if(!exitPost){
        throw new Error("this ID not exist")
    }
    const authorID = exitPost.author.toString()
    const userID = user.userID.toString()
    if(authorID !== userID){
        throw new Error("This user is not authorized.");
    }
    const result = await blogmodel.findByIdAndUpdate(
        PostID,
        payload,
        {new:true}
    )
   return result
  };
const blogDeletedService = async (payload:Partial<Iblog>, PostID: string, user: { userID: Schema.Types.ObjectId; }) => {
    const exitPost = await blogmodel.findById(PostID)
    if(!exitPost){
        throw new Error("this ID not exist")
    }
    const authorID = exitPost.author.toString()
    const finduser = await usermodel.findById(authorID)
    const userID = user.userID.toString()
    if(authorID !== userID){
        throw new Error(`This user is not authorized.This post owner by ${finduser?.email}`);
    }
    const result = await blogmodel.findByIdAndDelete(PostID )
   return result
  };

export const AllblogService ={
    blogPostService,
    blogGetService,
    blogUpdateService,
    blogDeletedService
}