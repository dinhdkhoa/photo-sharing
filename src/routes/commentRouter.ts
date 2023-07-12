import { userController } from '../controllers/user.controller'
import { Router } from 'express'
import { isAuthenticated, isOwner } from '../middleware/auth'

const commentRouter = Router()

export default commentRouter
