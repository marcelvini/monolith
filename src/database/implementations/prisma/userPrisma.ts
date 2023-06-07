import { User } from "../../entities/user"
import { IUserRepositoryImplementation } from "../../repositories/userRepository"
import { PrismaClient } from "@prisma/client"

class userPrismaMethods implements IUserRepositoryImplementation {
    constructor(private prismaClient: PrismaClient) {

    }
    async create(user: User) {
        return await this.prismaClient.user.create({ data: { name: user?.name || "", email: user?.email || "" } })

    }
    async update(id: string, user: User) {
        return this.prismaClient.user.update({ where: { id: id }, data: { name: user?.name || "", email: user?.email || "" } })
    }
    async findOne(id: string) {
        return await this.prismaClient.user.findUniqueOrThrow({ where: { id: id } })

    }
    async findAll() {
        return await this.prismaClient.user.findMany()
    }
    async delete(id: string) {
        try {
            await this.prismaClient.user.delete({ where: { id: id } })
            return true
        } catch {
            return false
        }
    }



}



export { userPrismaMethods }