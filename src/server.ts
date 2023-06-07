import "express-async-errors"
import express from 'express';
import { currentApi } from './infra/http';
import { afterRoutesmiddlewareList, beforeRoutesmiddlewareList } from './shared/middlewares';
import { errorMiddleware } from './shared/middlewares/errorMiddleware';
import * as dotenv from 'dotenv';
dotenv.config();
const { basePath, router } = currentApi
const server = express()
const port = process.env.PORT || 3000
server.use(beforeRoutesmiddlewareList)
server.listen(port, () => {
    console.log(`server is runing on ${port} port.`)
})

server.get('/', (req, res) => {
    res.send('OK!')
})
server.use(basePath, router)

server.use(afterRoutesmiddlewareList)

