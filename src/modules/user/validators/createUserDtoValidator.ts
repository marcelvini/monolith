import { User } from "../../../database/entities/user";
import { z } from 'zod'
import { createUserDto } from "../dtos/createUserDto";
import { badRequestError } from "../../../shared/errorHandling/errorTypes";
const createUserDtoValidator = (userData: createUserDto) => {
    const userSchema = z.object({
        name: z.string(),
        email: z.string().email()
    })
    const validatedData = userSchema.safeParse(userData)

    if (!validatedData.success) {
        throw new badRequestError(validatedData.error.message)
    }
    return validatedData.data

}
export { createUserDtoValidator }