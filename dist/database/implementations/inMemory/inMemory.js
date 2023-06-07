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

// src/database/implementations/inMemory/inMemory.ts
var inMemory_exports = {};
__export(inMemory_exports, {
  userInMemoryMethods: () => userInMemoryMethods,
  users: () => users
});
module.exports = __toCommonJS(inMemory_exports);
var users = [];
var userInMemoryMethods = class {
  create(user) {
    users.push(user);
    return user;
  }
  update(id, user) {
    let updatedUser = {};
    users = users.filter((usr) => {
      if (id === usr.id) {
        updatedUser = { ...usr, ...user };
        return updatedUser;
      }
      return usr;
    });
    return updatedUser;
  }
  findOne(id) {
    const user = users.filter((usr) => {
      if (id === usr.id) {
        return usr;
      }
    })[0];
    return user;
  }
  findAll() {
    return users;
  }
  delete(id) {
    users = users.filter((usr) => {
      if (id === usr.id) {
        return;
      }
      return usr;
    });
    return true;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userInMemoryMethods,
  users
});
