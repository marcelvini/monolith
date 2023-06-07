import { userRepository } from "../../../database/repositories/userRepository";
import { IUseCase } from "../../../shared/interfaces/IUseCase";
class deleteUserUsecase implements IUseCase {
    constructor(private userRepository: userRepository) { }
    async execute(id: string) {
        return await this.userRepository.delete(id)
    }

}
export { deleteUserUsecase }