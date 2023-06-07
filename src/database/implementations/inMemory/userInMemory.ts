import { randomUUID } from "crypto"
import { User } from "../../entities/user"
import { IUserRepositoryImplementation } from "../../repositories/userRepository"
import { notFoundError } from "../../../shared/errorHandling/errorTypes"


let users: User[] = []

class userInMemoryMethods implements IUserRepositoryImplementation {
    create(user: User) {
        const { name, email } = user
        const createdUser = { id: randomUUID(), email, name, createdAt: new Date() } as User
        users.push(createdUser)
        return createdUser
    }
    update(id: string, user: Partial<User>) {
        let updatedUser = {} as User
        users = users.map((usr: User) => {
            if (id === usr.id) {
                updatedUser = { ...usr, ...user }
                return updatedUser
            }
            return usr
        })
        return updatedUser
    }
    findOne(id: string) {
        let foundUser
        for (const user of users) {
            if (user.id === id) {
                foundUser = user
            }
        }
        if (!foundUser) {
            throw new notFoundError("user not found")
        }
        return foundUser as User
    }
    findAll() {
        return users
    }
    delete(id: string) {
        users = users.filter((usr) => {
            if (id === usr.id) {
                return
            }
            return usr
        })
    }



}



export { userInMemoryMethods, users }