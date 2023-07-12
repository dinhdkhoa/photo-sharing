import { UsersModel } from 'db/models/user.model'
import { Request, Response } from 'express'
import { UserAttributes } from 'types/user.type'

export const userController = {
  loginPost: (req: Request, res: Response) => {
    const { username, password } = req.body
    UsersModel.findOne({ where: { username, password } })
      .then((user) => res.send(user))
      .catch((err) => {
        res.send("You don't have an account. Try signing up!")
      })
  },
  signupPost: (req: Request, res: Response) => {
    const { username, password, email } = req.body
    const mediaLocation = (req.file as Express.Multer.File).filename
    UsersModel.create({ username, password, email })
      .then((user) => res.send(user))
      .catch((error) => {
        res.send(error)
      })
  }
}
