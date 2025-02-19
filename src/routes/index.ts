import { Router } from 'express'
import userRouter from './userRouter'
import commentRouter from './commentRouter'
import photoRouter from './photoRouter'

const routes = Router()

routes.use('/', (req, res) => {
  res.render('index')
})
routes.use('/comments', commentRouter)
routes.use('/photos', photoRouter)
routes.use('/users', userRouter)

export default routes
