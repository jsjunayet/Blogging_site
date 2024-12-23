import AppErrors from '../../errors/AppErrors';
import { Iuser } from './user.interface';
import { usermodel } from './user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const userRegisterService = async (body: Iuser) => {
  const result = await usermodel.create(body);

  return {
    _id: result._id,
    name: result.name,
    email: result.email,
  };
};
const userLoginService = async (body: Iuser) => {
  const RegisterUser = await usermodel.findOne({ email: body.email });
  if (!RegisterUser) {
    throw new AppErrors(404, 'Invalid credential');
  }
  const matchPassword = await bcrypt.compare(
    body.password,
    RegisterUser.password,
  );
  if (!matchPassword) {
    throw new AppErrors(401, 'Invalid credential');
  }
  const token = jwt.sign(
    {
      userID: RegisterUser._id,
      role: RegisterUser.role,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: 60 * 60 },
  );
  return { token };
};
export const AlluserService = {
  userRegisterService,
  userLoginService,
};
