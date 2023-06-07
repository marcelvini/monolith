import { userRepository } from "../../../database/repositories/userRepository";
import { IUseCase } from "../../../shared/interfaces/IUseCase";
class findAllUserUsecase implements IUseCase {
    constructor(private userRepository: userRepository) { }
    async execute() {
        return await this.userRepository.findAll()
    }
}
export { findAllUserUsecase }