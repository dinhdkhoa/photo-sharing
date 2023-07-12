import { sequelize } from '../index'
import { Model, DataTypes, Optional } from 'sequelize'
import { PhotoAttributes } from 'types/photo.type'

type PhotoCreationAttributes = Optional<PhotoAttributes, 'id' | 'userId' | 'slug' | 'description'>

export class PhotosModel extends Model<PhotoAttributes, PhotoCreationAttributes> {}

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
