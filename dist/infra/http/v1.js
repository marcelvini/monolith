"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/infra/http/v1.ts
var v1_exports = {};
__export(v1_exports, {
  basePath: () => version,
  router: () => router
});
module.exports = __toCommonJS(v1_exports);
var import_express2 = require("express");

// src/modules/user/http/userRoutes.ts
var import_express = require("express");

// src/database/repositories/index.ts
var import_client = require("@prisma/client");

// src/database/implementations/prisma/userPrisma.ts
var userPrismaMethods = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  async create(user) {
    return await this.prismaClient.user.create({ data: { name: user?.name || "", email: user?.email || "" } });
  }
  async update(id, user) {
    return this.prismaClient.user.update({ where: { id }, data: { name: user?.name || "", email: user?.email || "" } });
  }
  async findOne(id) {
    return await this.prismaClient.user.findUniqueOrThrow({ where: { id } });
  }
  async findAll() {
    return await this.prismaClient.user.findMany();
  }
  async delete(id) {
    try {
      await this.prismaClient.user.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
};

// src/database/repositories/userRepository.ts
var userRepository = class {
  constructor(userImplementation) {
    this.userImplementation = userImplementation;
  }
  async create(user) {
    try {
      return await this.userImplementation.create(user);
    } catch (e) {
      throw e;
    }
  }
  async update(id, user) {
    return await this.userImplementation.update(id, user);
  }
  async findOne(id) {
    return await this.userImplementation.findOne(id);
  }
  async findAll() {
    return await this.userImplementation.findAll();
  }
  async delete(id) {
    return await this.userImplementation.delete(id);
  }
};

// src/database/repositories/index.ts
var currentUserRepository = new userRepository(new userPrismaMethods(new import_client.PrismaClient()));

// src/modules/user/validators/createUserDtoValidator.ts
var import_zod = require("zod");
var createUserDtoValidator = (userData) => {
  const userSchema = import_zod.z.object({
    name: import_zod.z.string(),
    email: import_zod.z.string().email()
  });
  return userSchema.parse(userData);
};

// src/modules/user/controllers/userController.ts
var userController = class {
  constructor(createUserUseCase2, updateUserUseCase2, findOneUserUseCase2, findAllUserUseCase2, deleteUserUseCase2) {
    this.createUserUseCase = createUserUseCase2;
    this.updateUserUseCase = updateUserUseCase2;
    this.findOneUserUseCase = findOneUserUseCase2;
    this.findAllUserUseCase = findAllUserUseCase2;
    this.deleteUserUseCase = deleteUserUseCase2;
  }
  async create(req, res) {
    try {
      const createUserData = createUserDtoValidator(req.body);
      console.log("AAA");
      const resData = await this.createUserUseCase.execute(createUserData);
      res.send(resData);
    } catch (e) {
      if (e.issues) {
        res.status(400).send({ error: e.issues });
      } else {
        res.status(500).send({ error: e });
      }
    }
  }
  async update(req, res) {
    const id = req.params.id;
    res.send(await this.updateUserUseCase.execute({ ...req.body, id }));
  }
  async findOne(req, res) {
    const id = req.params.id;
    res.send(await this.findOneUserUseCase.execute(id));
  }
  async findAll(req, res) {
    res.send(await this.findAllUserUseCase.execute());
  }
  async delete(req, res) {
    const id = req.params.id;
    res.send(await this.deleteUserUseCase.execute(id));
  }
};

// src/modules/user/useCases/createUserUseCase.ts
var createUserUsecase = class {
  constructor(userRepository2) {
    this.userRepository = userRepository2;
  }
  async execute(user) {
    try {
      return await this.userRepository.create(user);
    } catch (e) {
      throw e;
    }
  }
};

// src/modules/user/useCases/deleteUserUseCase.ts
var deleteUserUsecase = class {
  constructor(userRepository2) {
    this.userRepository = userRepository2;
  }
  async execute(id) {
    return await this.userRepository.delete(id);
  }
};

// src/modules/user/useCases/findAllUserUseCase.ts
var findAllUserUsecase = class {
  constructor(userRepository2) {
    this.userRepository = userRepository2;
  }
  async execute() {
    return await this.userRepository.findAll();
  }
};

// src/modules/user/useCases/findOneUserUseCase.ts
var findOneUserUsecase = class {
  constructor(userRepository2) {
    this.userRepository = userRepository2;
  }
  async execute(id) {
    return await this.userRepository.findOne(id);
  }
};

// src/modules/user/useCases/updateUserUseCase.ts
var updateUserUsecase = class {
  constructor(userRepository2) {
    this.userRepository = userRepository2;
  }
  async execute(user) {
    return await this.userRepository.update(user.id || "", user);
  }
};

// src/modules/user/index.ts
var createUserUseCase = new createUserUsecase(currentUserRepository);
var updateUserUseCase = new updateUserUsecase(currentUserRepository);
var findOneUserUseCase = new findOneUserUsecase(currentUserRepository);
var findAllUserUseCase = new findAllUserUsecase(currentUserRepository);
var deleteUserUseCase = new deleteUserUsecase(currentUserRepository);
var controller = new userController(createUserUseCase, updateUserUseCase, findOneUserUseCase, findAllUserUseCase, deleteUserUseCase);

// src/modules/user/http/userRoutes.ts
var userRoutes = (0, import_express.Router)().post(
  "/",
  (req, res) => controller.create(req, res)
).put(
  "/:id",
  (req, res) => controller.update(req, res)
).get(
  "/:id",
  (req, res) => controller.findOne(req, res)
).get(
  "/",
  (req, res) => controller.findAll(req, res)
).delete(
  "/:id",
  (req, res) => controller.delete(req, res)
);

// src/infra/http/v1.ts
var router = (0, import_express2.Router)();
router.use("/users", userRoutes);
var version = "/v1";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  basePath,
  router
});
