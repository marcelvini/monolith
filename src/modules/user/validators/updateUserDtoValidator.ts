import { User } from "../../../database/entities/user";
import { z } from 'zod'
const updateUserDtoValidator = (userData: Partial<User>) => {
    const userSchema = z.object({
        name: z.string(),
        email: z.string().email()
    })
    return userSchema.parse(userData)

}
export { updateUserDtoValidator }