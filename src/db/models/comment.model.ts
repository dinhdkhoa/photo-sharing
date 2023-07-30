import { sequelize } from '../index'
import { Model, DataTypes, Optional } from 'sequelize'
import { CommentAttributes } from 'types/comment.type'

export type CommentCreationAttributes = Optional<CommentAttributes, 'id'>

export class CommentsModel extends Model<CommentAttributes, CommentCreationAttributes> {}

export const CommentsModelInit = () =>
  CommentsModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER
      },
      content: {
        type: DataTypes.STRING
      },
      photoId: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      tableName: 'comment'
    }
  )
