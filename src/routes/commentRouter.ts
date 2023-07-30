import { Router } from 'express'
import { CommentController } from 'controllers/auth.controller'

const commentRouter = Router()

commentRouter.route('/').post(CommentController.postComment)
commentRouter.route('/:id').post(CommentController.postComment)

export default commentRouter
