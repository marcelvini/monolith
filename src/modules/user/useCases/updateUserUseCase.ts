import { User } from "../../../database/entities/user";
import { userRepository } from "../../../database/repositories/userRepository";
import { IUseCase } from "../../../shared/interfaces/IUseCase";
class updateUserUsecase implements IUseCase {
    constructor(private userRepository: userRepository) { }
    async execute(user: User) {
        return await this.userRepository.update(user.id || "", user)
    }
}
export { updateUserUsecase }