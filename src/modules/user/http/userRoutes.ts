import { Router } from 'express'
import { controller } from '..'


const userRoutes = Router()
    .post('/', (req, res) =>
        controller.create(req, res),
    )
    .put('/:id', (req, res) =>
        controller.update(req, res),
    )
    .get('/:id', (req, res) =>
        controller.findOne(req, res),
    )
    .get('/', (req, res) =>
        controller.findAll(req, res),
    )
    .delete('/:id', (req, res) =>
        controller.delete(req, res),
    )

export { userRoutes }