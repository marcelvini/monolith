import { Router } from 'express'
import { userRoutes } from '../../modules/user/http/userRoutes'




const router = Router()

router
    .use('/user', userRoutes)


const version = '/v1'

export { version as basePath, router }