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

// src/modules/user/useCases/findAllUserUseCase.ts
var findAllUserUseCase_exports = {};
__export(findAllUserUseCase_exports, {
  findAllUserUsecase: () => findAllUserUsecase
});
module.exports = __toCommonJS(findAllUserUseCase_exports);
var findAllUserUsecase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute() {
    return await this.userRepository.findAll();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findAllUserUsecase
});
