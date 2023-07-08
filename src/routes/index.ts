import { Router } from 'express'
import userRouter from './userRouter'
import commentRouter from './commentRouter'
import photoRouter from './photoRouter'

const routes = Router()

routes.use('/comment', commentRouter)
routes.use('/photo', photoRouter)
routes.use('/user', userRouter)

export default routes
