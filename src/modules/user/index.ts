
import { currentUserRepository } from '../../database/repositories'
import { userController } from './controllers/userController'
import { createUserUsecase } from './useCases/createUserUseCase'
import { deleteUserUsecase } from './useCases/deleteUserUseCase'
import { findAllUserUsecase } from './useCases/findAllUserUseCase'
import { findOneUserUsecase } from './useCases/findOneUserUseCase'
import { updateUserUsecase } from './useCases/updateUserUseCase'



const createUserUseCase = new createUserUsecase(currentUserRepository)
const updateUserUseCase = new updateUserUsecase(currentUserRepository)
const findOneUserUseCase = new findOneUserUsecase(currentUserRepository)
const findAllUserUseCase = new findAllUserUsecase(currentUserRepository)
const deleteUserUseCase = new deleteUserUsecase(currentUserRepository)

const controller = new userController(createUserUseCase, updateUserUseCase, findOneUserUseCase, findAllUserUseCase, deleteUserUseCase)

export { controller }