import { AlluserService } from './user.service';
import sendResponse from '../../utilitiy/sendResponse';
import { catchAsync } from '../../utilitiy/catchAsync';

const userRegister = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await AlluserService.userRegisterService(body);
  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: 201,
    data: data,
  });
});
const userLogin = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await AlluserService.userLoginService(body);
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: 200,
    data: data,
  });
});
export const AlluserController = {
  userRegister,
  userLogin,
};
