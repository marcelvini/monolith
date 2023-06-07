import 'express-async-errors'
import express from 'express';
import { currentApi } from './infra/http';
import { afterRoutesmiddlewareList, beforeRoutesmiddlewareList } from './shared/middlewares';
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
dotenv.config();
const { basePath, router } = currentApi
const server = express()
const port = process.env.PORT || 3000
server.use(beforeRoutesmiddlewareList)
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
server.listen(port, () => {
    console.log(`server is runing on ${port} port.`)
})

server.get('/', (req, res) => {
    res.send('OK!')
})
server.use(basePath, router)

server.use(afterRoutesmiddlewareList)

