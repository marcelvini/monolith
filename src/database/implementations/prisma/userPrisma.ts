import { notFoundError } from "../../../shared/errorHandling/errorTypes"
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
        const foundUser = await this.prismaClient.user.findUnique({ where: { id: id } })
        if (!foundUser) {
            throw new notFoundError("user not found")
        }
        return this.prismaClient.user.update({ where: { id: id }, data: { name: user?.name || "", email: user?.email || "" } })
    }
    async findOne(id: string) {
        const foundUser = await this.prismaClient.user.findUnique({ where: { id: id } })
        if (!foundUser) {
            throw new notFoundError("user not found")
        }
        return foundUser

    }
    async findAll() {
        return await this.prismaClient.user.findMany()
    }
    async delete(id: string) {
        const foundUser = await this.prismaClient.user.findUnique({ where: { id: id } })
        if (!foundUser) {
            throw new notFoundError("user not found")
        }
        await this.prismaClient.user.delete({ where: { id: id } })

    }



}



export { userPrismaMethods }