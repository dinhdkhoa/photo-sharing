import express from 'express'
import routes from './routes'
import path from 'path'
import connect from './db'

const app: express.Application = express()
const PORT = 4000

//connect db
connect()

//middlewares
app.use(express.json())

//template engine
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
//routes
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})
