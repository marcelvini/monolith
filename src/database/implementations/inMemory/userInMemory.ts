import { randomUUID } from "crypto"
import { User } from "../../entities/user"
import { IUserRepositoryImplementation } from "../../repositories/userRepository"


let users: User[] = []

class userInMemoryMethods implements IUserRepositoryImplementation {
    create(user: User) {
        const { name, email } = user
        users.push({ id: randomUUID(), email, name, createdAt: new Date() } as User)
        return user
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
        let foundUser = {}
        for (const user of users) {
            if (user.id === id) {
                foundUser = user
            }
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
        return true
    }



}



export { userInMemoryMethods, users }