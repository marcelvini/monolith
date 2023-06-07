import { User } from "../entities/user"
import { userValidator } from "../validators/userValidator"


interface IUserRepositoryImplementation {
    create(user: Partial<User>): User | Promise<User | undefined>
    update(id: string, user: Partial<User>): User | Promise<User>
    findOne(id: string): User | Promise<User>
    findAll(): User[] | Promise<User[]>
    delete(id: string): boolean | Promise<boolean>
}
class userRepository implements IUserRepositoryImplementation {
    constructor(private userImplementation: IUserRepositoryImplementation) { }
    async create(user: Partial<User>) {
        return await this.userImplementation.create(userValidator(user))
    }
    async update(id: string, user: Partial<User>) { return await this.userImplementation.update(id, user) }
    async findOne(id: string) { return await this.userImplementation.findOne(id) }
    async findAll() { return await this.userImplementation.findAll() }
    async delete(id: string) {
        return await this.userImplementation.delete(id)
    }

}
export { IUserRepositoryImplementation, userRepository }