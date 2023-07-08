import { Router } from 'express'

const routes = Router()

routes.use('/', (req, res) => {
  res.render('index')
})

export default routes
