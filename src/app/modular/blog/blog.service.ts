/* eslint-disable @typescript-eslint/no-explicit-any */
import { Iblog } from './blog.interface';
import { blogmodel } from './blog.model';
import { usermodel } from '../user/user.model';
import AppErrors from '../../errors/AppErrors';
import QueryBuilder from '../../utilitiy/QueryBuilder';
import { JWTuser } from '../../interface/error.interface';

const blogPostService = async (body: Iblog, user: JWTuser) => {
  body.author = user.userID; // Ensure `userID` matches the correct ObjectId
  const blogResult = await blogmodel.create(body);
  const result = await blogResult.populate('author', 'name email'); // Ensure `author` matches the schema field
  return formatResponse(result);
};
const blogGetService = async (query: Record<string, unknown>) => {
  const queryBuilder = new QueryBuilder(
    blogmodel.find().populate('author', 'name email'),
    query,
  )
    .search(['title', 'content'])
    .sort()
    .filter();
  const result = await queryBuilder.QueryModel; // Execute the query to get the results
  return result?.map(formatResponse);
};
const blogUpdateService = async (
  payload: Partial<Iblog>,
  PostID: string,
  user: JWTuser,
) => {
  const exitPost = await blogmodel.findById(PostID);
  if (!exitPost) {
    throw new AppErrors(404, 'This ID does not exist');
  }
  const authorID = exitPost.author.toString();
  const userID = user.userID.toString();
  if (authorID !== userID) {
    throw new AppErrors(403, 'This user is not authorized');
  }
  const result = await blogmodel
    .findByIdAndUpdate(PostID, payload, { new: true })
    .populate('author', 'name email');
  return formatResponse(result);
};
const blogDeletedService = async (
  PostID: string,
  user: JWTuser,
) => {
  const exitPost = await blogmodel.findById(PostID);
  if (!exitPost) {
    throw new AppErrors(404, 'This ID does not exist');
  }
  const authorID = exitPost.author.toString();
  const findUser = await usermodel.findById(authorID);
  const userID = user.userID.toString();
  if (authorID !== userID) {
    throw new AppErrors(
      403,
      `This user is not authorized. This post is owned by ${findUser?.email}`,
    );
  }
  const result = await blogmodel.findByIdAndDelete(PostID);
  return formatResponse(result);
};
const formatResponse = (result: any) => {
  if (!result) return null;
  return {
    _id: result._id,
    title: result.title,
    content: result.content,
    author: result.author,
  };
};

export const AllblogService = {
  blogPostService,
  blogGetService,
  blogUpdateService,
  blogDeletedService,
};
