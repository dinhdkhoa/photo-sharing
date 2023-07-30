import { sequelize } from '../index'
import { Model, DataTypes, Optional } from 'sequelize'
import { UserAttributes } from 'types/user.type'

export type UserCreationAttributes = Optional<UserAttributes, 'id'>

export class UsersModel extends Model<UserAttributes, UserCreationAttributes> {}

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
