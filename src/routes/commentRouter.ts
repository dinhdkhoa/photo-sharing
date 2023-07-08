import { userController } from '../controllers/user.controller'
import { Router } from 'express'
import { isAuthenticated, isOwner } from '../middleware/auth'

const commentRouter = Router()

commentRouter
  .route('/:id')
  .delete(isAuthenticated, isOwner, userController.deleteUser)
  .patch(isAuthenticated, isOwner, userController.updateUsername)
commentRouter.route('/').get(isAuthenticated, userController.getAllUsers)

export default commentRouter
