import { Router } from 'express';
import { verifyToken } from '../../middleware/verifyToken';
import { AllAdminController } from './admin.controller';

const router = Router();
router.delete('/blogs/:id', verifyToken, AllAdminController.AdminDeleted);
router.patch(
  '/users/:userId/block',
  verifyToken,
  AllAdminController.AdminUpdate,
);
export const adminRoute = router;
