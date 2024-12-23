import sendResponse from '../../utilitiy/sendResponse';
import { catchAsync } from '../../utilitiy/catchAsync';
import { AllblogService } from './blog.service';
import { JWTuser } from '../../interface/error.interface';

const blogPost = catchAsync(async (req, res) => {
  const body = req.body;
  const user = req.user as JWTuser;
  const data = await AllblogService.blogPostService(body, user);
  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: 201,
    data: data,
  });
});
const blogGet = catchAsync(async (req, res) => {
  const data = await AllblogService.blogGetService(req.query);
  sendResponse(res, {
    success: true,
    message: 'Blogs fetched successfully',
    statusCode: 200,
    data: data,
  });
});
const blogUpdate = catchAsync(async (req, res) => {
  const payload = req.body;
  const PostID = req.params.id;
  const user = req.user as JWTuser;

  const data = await AllblogService.blogUpdateService(payload, PostID, user);
  sendResponse(res, {
    success: true,
    message: 'Blog updated successfully',
    statusCode: 200,
    data: data,
  });
});
const blogDeleted = catchAsync(async (req, res) => {
  const PostID = req.params.id;
  const user = req.user as JWTuser;

  const data = await AllblogService.blogDeletedService( PostID, user);
  if (data) {
    sendResponse(res, {
      success: true,
      message: 'Blog deleted successfully',
      statusCode: 200,
      data: {},
    });
  }
});
export const AllblogController = {
  blogPost,
  blogGet,
  blogUpdate,
  blogDeleted,
};
