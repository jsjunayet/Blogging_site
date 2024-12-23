import { JWTuser } from '../../interface/error.interface';
import { catchAsync } from '../../utilitiy/catchAsync';
import sendResponse from '../../utilitiy/sendResponse';
import { AllAdminService } from './admin.service';

const AdminUpdate = catchAsync(async (req, res) => {
  const PostID = req.params.userId;
  const user = req.user as JWTuser;

  const data = await AllAdminService.AdminUpdateService(PostID, user);
  if (data) {
    sendResponse(res, {
      success: true,
      message: 'User blocked successfully',
      statusCode: 200,
      data: {},
    });
  }
});
const AdminDeleted = catchAsync(async (req, res) => {
  const payload = req.body;
  const PostID = req.params.id;
  const user = req.user as JWTuser;

  const data = await AllAdminService.AdminDeletedService(payload, PostID, user);
  if (data) {
    sendResponse(res, {
      success: true,
      message: 'Blog deleted successfully',
      statusCode: 200,
      data: {},
    });
  }
});
export const AllAdminController = {
  AdminDeleted,
  AdminUpdate,
};
