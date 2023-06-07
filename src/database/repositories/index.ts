import { PrismaClient } from "@prisma/client";
import { userInMemoryMethods } from "../implementations/inMemory/userInMemory";
import { userPrismaMethods } from "../implementations/prisma/userPrisma";
import { userRepository } from "./userRepository";

const currentUserRepository = new userRepository(new userInMemoryMethods())
//const currentUserRepository = new userRepository(new userPrismaMethods(new PrismaClient()))

export { currentUserRepository }