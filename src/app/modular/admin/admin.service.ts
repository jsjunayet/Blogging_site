import { blogmodel } from '../blog/blog.model';
import { Iblog } from '../blog/blog.interface';
import { usermodel } from '../user/user.model';
import AppErrors from '../../errors/AppErrors';
import { JWTuser } from '../../interface/error.interface';

const AdminUpdateService = async (PostID: string, user: JWTuser) => {
  const exitPost = await usermodel.findById(PostID);
  if (!exitPost) {
    throw new AppErrors(404, 'This ID does not exist');
  }

  if (user.role !== 'admin') {
    throw new AppErrors(403, 'This user is not an admin');
  }
  const result = await usermodel.findByIdAndUpdate(
    PostID,
    { isBlocked: true },
    { new: true },
  );
  return result;
};
const AdminDeletedService = async (
  payload: Partial<Iblog>,
  PostID: string,
  user: JWTuser,
) => {
  const exitPost = await blogmodel.findById(PostID);
  if (!exitPost) {
    throw new AppErrors(404, 'This ID does not exist');
  }

  if (user.role !== 'admin') {
    throw new AppErrors(403, 'This user is not an admin');
  }
  const result = await blogmodel.findByIdAndDelete(PostID);
  return result;
};

export const AllAdminService = {
  AdminDeletedService,
  AdminUpdateService,
};
