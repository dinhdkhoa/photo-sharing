1. Install sequelize mariadb

```
yarn add mariadb sequelize sequelize-cli
```

For now use the MariaDB client

```sql
DROP DATABASE IF EXISTS photos;
CREATE DATABASE photos;
USE photos
```

In models/index.ts

```ts
import { Dialect, Sequelize } from 'sequelize'
import express from 'express'

const sqlPort = 3306 //default mariadb Port
const app: express.Application = express()
const sequelizeConnection = new Sequelize('photos', '', '', {
  username: 'root',
  password: '',
  database: 'photos',
  dialect: 'mariadb',
  host: 'localhost',
  logging: false
}) // change config options based on db and dialect

const connect = () => {
  sequelizeConnection
    .sync()
    .then(() => {
      app.listen(sqlPort, () => {
        console.log(`MariaDB Connection has been established successfully to http://localhost:${sqlPort}.`)
      })
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error)
    })
}

export default connect
```
