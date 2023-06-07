import { User } from "../../../database/entities/user";
import { userRepository } from "../../../database/repositories/userRepository";
import { IUseCase } from "../../../shared/interfaces/IUseCase";
import { createUserDto } from "../dtos/createUserDto";
class createUserUsecase implements IUseCase {
    constructor(private userRepository: userRepository) { }
    async execute(user: createUserDto) {

        const createdUser = await this.userRepository.create(user)
        return createdUser

    }
}

export { createUserUsecase }