import { userController } from '../controllers/user.controller'
import { Router } from 'express'
import { isAuthenticated, isOwner } from '../middleware/auth'

const photoRouter = Router()

photoRouter.route('/').get(isAuthenticated, userController.getAllUsers)

export default photoRouter
