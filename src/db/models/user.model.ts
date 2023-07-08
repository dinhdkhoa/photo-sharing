import { sequelize } from '../index'
import { Model, DataTypes } from 'sequelize'
import { UserAttributes } from 'types/user.type'

class UsersModel extends Model<UserAttributes> {}

export const UserModelInit = () =>
  UsersModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      tableName: 'user'
    }
  )
