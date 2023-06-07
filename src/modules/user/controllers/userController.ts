import { Request, Response } from "express";
import { createUserUsecase } from "../useCases/createUserUseCase";
import { deleteUserUsecase } from "../useCases/deleteUserUseCase";
import { findAllUserUsecase } from "../useCases/findAllUserUseCase";
import { findOneUserUsecase } from "../useCases/findOneUserUseCase";
import { updateUserUsecase } from "../useCases/updateUserUseCase";
import { createUserDtoValidator } from "../validators/createUserDtoValidator";
import { badRequestError } from "../../../shared/errorHandling/errorTypes";
import { error } from "console";

class userController {

    constructor(
        private createUserUseCase: createUserUsecase,
        private updateUserUseCase: updateUserUsecase,
        private findOneUserUseCase: findOneUserUsecase,
        private findAllUserUseCase: findAllUserUsecase,
        private deleteUserUseCase: deleteUserUsecase
    ) { }
    async create(req: Request, res: Response) {
        const createUserData = createUserDtoValidator(req.body)
        const resData = await this.createUserUseCase.execute(createUserData)
        res.send(resData)
    }
    async update(req: Request, res: Response) {
        const id = req.params.id
        res.send(await this.updateUserUseCase.execute({ ...req.body, id }))
    }
    async findOne(req: Request, res: Response) {
        const id = req.params.id
        res.send(await this.findOneUserUseCase.execute(id))
    }
    async findAll(req: Request, res: Response) {
        res.send(await this.findAllUserUseCase.execute())
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id
        res.send(await this.deleteUserUseCase.execute(id))
    }




}

export { userController }