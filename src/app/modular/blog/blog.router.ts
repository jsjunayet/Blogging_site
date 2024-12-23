import { Router } from 'express';
import { validation } from '../../middleware/validation';
import { BlogvalidationAll } from './blog.validation';
import { verifyToken } from '../../middleware/verifyToken';
import { AllblogController } from './blog.controller';

const router = Router();
router.post(
  '/',
  verifyToken,
  validation(BlogvalidationAll.blogvalidation),
  AllblogController.blogPost,
);
router.get('/', AllblogController.blogGet);
router.patch(
  '/:id',
  verifyToken,
  validation(BlogvalidationAll.blogUpdatevalidation),
  AllblogController.blogUpdate,
);
router.delete('/:id', verifyToken, AllblogController.blogDeleted);
router.delete(
  '/api/admin/blogs/:id',
  verifyToken,
  AllblogController.blogDeleted,
);
router.patch(
  '/admin/users/:userId/block',
  verifyToken,
  AllblogController.blogDeleted,
);
export const blogRouter = router;
