import { userController } from '../controllers/user.controller'
import { Router } from 'express'
import { isAuthenticated, isOwner } from '../middleware/auth'

const userRouter = Router()

userRouter.route('/').get(isAuthenticated, userController.getAllUsers)

export default userRouter
