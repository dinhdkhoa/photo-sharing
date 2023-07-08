import { sequelize } from '../index'
import { Model, DataTypes } from 'sequelize'
import { CommentAttributes } from 'types/comment.type'

class CommentsModel extends Model<CommentAttributes> {}

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
