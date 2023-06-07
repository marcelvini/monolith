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

// src/database/implementations/prisma/userPrisma.ts
var userPrisma_exports = {};
__export(userPrisma_exports, {
  userPrismaMethods: () => userPrismaMethods
});
module.exports = __toCommonJS(userPrisma_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userPrismaMethods
});
