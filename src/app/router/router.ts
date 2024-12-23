import { Router } from 'express';
import { userRouter } from '../modular/user/user.route';
import { blogRouter } from '../modular/blog/blog.router';
import { adminRoute } from '../modular/admin/admin.route';

const router = Router();
const allRouter = [
  {
    path: '/auth',
    route: userRouter,
  },
  {
    path: '/blogs',
    route: blogRouter,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
];
allRouter.forEach((route) => router.use(route.path, route.route));
export default router;
