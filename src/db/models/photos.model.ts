import { sequelize } from '../index'
import { Model, DataTypes } from 'sequelize'
import { PhotoAttributes } from 'types/photo.type'

class PhotosModel extends Model<PhotoAttributes> {}

export const PhotosModelInit = () =>
  PhotosModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      slug: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.INTEGER
      },
      mediaLocation: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize: sequelize,
      tableName: 'photos'
    }
  )
