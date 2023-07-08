import express from 'express'
import routes from './routes'
import path from 'path'

const app: express.Application = express()
const PORT = 4000

app.use(express.json())

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})
