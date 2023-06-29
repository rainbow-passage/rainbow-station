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
var Sequelize_exports = {};
__export(Sequelize_exports, {
  sequelize: () => sequelize
});
module.exports = __toCommonJS(Sequelize_exports);
var import_sequelize_typescript = require("sequelize-typescript");
const sequelize = new import_sequelize_typescript.Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "rainpass_test",
  password: "rainpass_test"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sequelize
});
//# sourceMappingURL=Sequelize.js.map
