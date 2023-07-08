import { Sequelize } from 'sequelize'
import express from 'express'
import { modelInit } from './modelInit'

const sqlPort = 3306 //default mariadb Port
const app: express.Application = express()

export const sequelize = new Sequelize('photos', 'root', '', {
  dialect: 'mariadb',
  host: 'localhost',
  logging: false
})

const connect = async () => {
  try {
    await modelInit()
    await sequelize.sync()

    app.listen(sqlPort, () => {
      console.log(`MariaDB Connection has been established successfully to http://localhost:${sqlPort}.`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default connect
