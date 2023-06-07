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

// src/database/implementations/inMemory/userInMemory.ts
var userInMemory_exports = {};
__export(userInMemory_exports, {
  userInMemoryMethods: () => userInMemoryMethods,
  users: () => users
});
module.exports = __toCommonJS(userInMemory_exports);
var import_crypto = require("crypto");
var users = [];
var userInMemoryMethods = class {
  create(user) {
    const { name, email } = user;
    users.push({ id: (0, import_crypto.randomUUID)(), email, name, createdAt: /* @__PURE__ */ new Date() });
    return user;
  }
  update(id, user) {
    let updatedUser = {};
    users = users.map((usr) => {
      if (id === usr.id) {
        updatedUser = { ...usr, ...user };
        return updatedUser;
      }
      return usr;
    });
    return updatedUser;
  }
  findOne(id) {
    let foundUser = {};
    for (const user of users) {
      if (user.id === id) {
        foundUser = user;
      }
    }
    return foundUser;
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
