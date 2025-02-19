import { UserCreationAttributes, UsersModel } from '../db/models/user.model'
import { Request, Response } from 'express'
import { UserAttributes } from 'types/user.type'

export const userController = {
  loginPost: (req: Request, res: Response) => {
    const { username, password }: UserCreationAttributes = req.body
    UsersModel.findOne({ where: { username, password } })
      .then((user) => res.send(user))
      .catch((err) => {
        res.send("You don't have an account. Try signing up!")
      })
  },
  signupPost: (req: Request, res: Response) => {
    const { username, password, email }: UserCreationAttributes = req.body
    UsersModel.create({ username, password, email })
      .then((user) => res.send(user))
      .catch((error) => {
        res.send(error)
      })
  }
}
