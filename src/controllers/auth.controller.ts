import { CommentCreationAttributes, CommentsModel } from '../db/models/comment.model'
import { Request, Response } from 'express'

export const CommentController = {
  postComment: (req: Request, res: Response) => {
    const { content, photoId, userId }: CommentCreationAttributes = req.body
    CommentsModel.create({ content, photoId, userId })
      .then((comment) => {
        console.log('POST comment')
        res.send(comment)
      })
      .catch((error) => {
        res.send(error)
      })
  }
}
