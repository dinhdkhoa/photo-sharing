import { config } from 'dotenv'
import { Dialect, Sequelize } from 'sequelize'

config()

const sqlPort = Number(process.env.MARIADB_PORT || '3306')
const dbUserName = process.env.MARIADB_USER || ''
const dbPassword = process.env.MARIADB_PASSWORD || ''
const dbName = process.env.MARIADB_DATABASE || ''
const dialect: Dialect = 'mariadb'

export const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
  dialect,
  host: 'localhost',
  logging: false,
  port: sqlPort
})

const connect = async () => {
  try {
    // await modelInit()
    await sequelize.authenticate()
    console.log(`Successfully connected to ${dialect} on ${sqlPort}`)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default connect
