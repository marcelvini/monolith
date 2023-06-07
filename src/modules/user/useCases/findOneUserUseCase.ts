import { userRepository } from "../../../database/repositories/userRepository";
import { IUseCase } from "../../../shared/interfaces/IUseCase";
class findOneUserUsecase implements IUseCase {
    constructor(private userRepository: userRepository) { }
    async execute(id: string) {
        return await this.userRepository.findOne(id)
    }
}
export { findOneUserUsecase }