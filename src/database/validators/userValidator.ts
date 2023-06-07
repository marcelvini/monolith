import { User } from "../entities/user";
import { z } from 'zod'
const userValidator = (userData: Partial<User>) => {
    const userSchema = z.object({
        name: z.string(),
        email: z.string().email()
    })
    return userSchema.parse(userData)

}
export { userValidator }