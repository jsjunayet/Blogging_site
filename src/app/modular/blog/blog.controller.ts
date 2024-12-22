import sendResponse from "../../utilitiy/sendResponse"
import { catchAsync } from "../../utilitiy/catchAsync"
import { AllblogService } from "./blog.service"

const blogPost = catchAsync(async(req, res)=>{
    const body = req.body
    const user = req.user
   const data = await AllblogService.blogPostService(body, user)
    sendResponse(res, 
          {
            success: true,
            message: 'Post successful',
            statusCode: 200,
            data: data,
          })
})
const blogGet = catchAsync(async(req, res)=>{
   const data = await AllblogService.blogGetService()
    sendResponse(res, 
          {
            success: true,
            message: 'All Post Get successful',
            statusCode: 200,
            data: data,
          })
})
const blogUpdate = catchAsync(async(req, res)=>{
  const payload = req.body
  const PostID = req.params.id
  const user = req.user

   const data = await AllblogService.blogUpdateService(payload, PostID, user)
    sendResponse(res, 
          {
            success: true,
            message: 'post Update successful',
            statusCode: 200,
            data: data,
          })
})
const blogDeleted = catchAsync(async(req, res)=>{
  const payload = req.body
  const PostID = req.params.id
  const user = req.user

   const data = await AllblogService.blogDeletedService(payload, PostID, user)
   if(data){
    sendResponse(res, 
      {
        success: true,
        message: 'Post Deleted successful',
        statusCode: 200,
        data:{}
      })
   }
})
export const AllblogController ={
    blogPost,
    blogGet,
    blogUpdate,
    blogDeleted
}