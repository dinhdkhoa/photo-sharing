import { CommentsModelInit } from './models/comment.model'
import { PhotosModelInit } from './models/photos.model'
import { UserModelInit } from './models/user.model'

export const modelInit = () => {
  CommentsModelInit()
  PhotosModelInit()
  UserModelInit()
}
