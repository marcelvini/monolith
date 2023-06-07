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

// src/database/repositories/userRepository.ts
var userRepository_exports = {};
__export(userRepository_exports, {
  userRepository: () => userRepository
});
module.exports = __toCommonJS(userRepository_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userRepository
});
