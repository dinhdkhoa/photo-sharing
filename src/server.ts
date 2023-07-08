import express from 'express'
import routes from 'routes'

const app: express.Application = express()
const PORT = 4000

app.use(express.json())
app.use(express.static('public'))
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}!`)
})
