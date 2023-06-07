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

// src/database/repositories/index.ts
var repositories_exports = {};
__export(repositories_exports, {
  currentUserRepository: () => currentUserRepository
});
module.exports = __toCommonJS(repositories_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  currentUserRepository
});
