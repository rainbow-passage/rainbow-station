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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var Volunteers_model_exports = {};
__export(Volunteers_model_exports, {
  Volunteer: () => Volunteer
});
module.exports = __toCommonJS(Volunteers_model_exports);
var import_sequelize_typescript = require("sequelize-typescript");
let Volunteer = class extends import_sequelize_typescript.Model {
};
__decorateClass([
  (0, import_sequelize_typescript.Column)({
    type: import_sequelize_typescript.DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
], Volunteer.prototype, "id", 2);
__decorateClass([
  (0, import_sequelize_typescript.Column)({
    type: import_sequelize_typescript.DataType.STRING,
    allowNull: false
  })
], Volunteer.prototype, "pronouns", 2);
__decorateClass([
  (0, import_sequelize_typescript.Column)({
    type: import_sequelize_typescript.DataType.STRING,
    allowNull: true
  })
], Volunteer.prototype, "middleName", 2);
Volunteer = __decorateClass([
  (0, import_sequelize_typescript.Table)({
    timestamps: true,
    tableName: "Volunteers"
  })
], Volunteer);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Volunteer
});
//# sourceMappingURL=Volunteers.model.js.map
