import { photoController, upload } from '../controllers/photo.controller'
import { Router } from 'express'

const photoRouter = Router()

photoRouter.route('/').get(photoController.getPhotos).post(upload.single('photos'), photoController.postPhotos)

export default photoRouter
