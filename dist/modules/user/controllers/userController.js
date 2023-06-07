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

// src/modules/user/controllers/userController.ts
var userController_exports = {};
__export(userController_exports, {
  userController: () => userController
});
module.exports = __toCommonJS(userController_exports);

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
  constructor(createUserUseCase, updateUserUseCase, findOneUserUseCase, findAllUserUseCase, deleteUserUseCase) {
    this.createUserUseCase = createUserUseCase;
    this.updateUserUseCase = updateUserUseCase;
    this.findOneUserUseCase = findOneUserUseCase;
    this.findAllUserUseCase = findAllUserUseCase;
    this.deleteUserUseCase = deleteUserUseCase;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userController
});
