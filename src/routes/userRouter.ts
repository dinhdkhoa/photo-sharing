import { userController } from '../controllers/user.controller'
import { Router } from 'express'

const userRouter = Router()

userRouter.route('/login').post(userController.loginPost)
userRouter.route('/signup').post(userController.signupPost)

export default userRouter
