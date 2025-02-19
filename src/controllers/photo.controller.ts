import { PhotosModel } from '../db/models/photos.model'
import { Request, Response } from 'express'
import multer from 'multer'

export const photoController = {
  getPhotos: (req: Request, res: Response) => {
    PhotosModel.findAll()
      .then((photos) => {
        console.log('Get Images')
        res.redirect('/')
      })
      .catch((err) => res.send(err))
  },
  postPhotos: (req: Request, res: Response) => {
    const { title } = req.body
    const mediaLocation = req.file?.filename
    if (!mediaLocation) return res.sendStatus(400)
    PhotosModel.create({ title: title, mediaLocation: mediaLocation })
      .then((photo) => {
        console.log('POST IMAGES')
        res.send(photo)
      })
      .catch((error) => {
        res.send(error)
      })
  }
}

const fileStorageEngine = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, './public/images')
  },
  filename: (request, file, callback) => {
    callback(null, Date.now() + '--' + file.originalname)
  }
})

const uploadFilter = function (req: Request, file: Express.Multer.File, callback: any) {
  const fileType = file.mimetype.split('/')

  if (fileType[0] === 'image') {
    callback(null, true)
  } else {
    callback('You are trying to upload a file that is not an image. Go back and try again', false)
  }
}

export const upload = multer({
  fileFilter: uploadFilter,
  storage: fileStorageEngine
})
