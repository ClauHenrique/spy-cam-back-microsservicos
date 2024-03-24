"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const uuid_1 = require("uuid");
let Camera = class Camera extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        primaryKey: true,
        defaultValue: () => (0, uuid_1.v4)()
    }),
    __metadata("design:type", String)
], Camera.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => usuario_entity_1.Usuario),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Camera.prototype, "usuario_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => usuario_entity_1.Usuario),
    __metadata("design:type", usuario_entity_1.Usuario)
], Camera.prototype, "usuario", void 0);
Camera = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'camera' })
], Camera);
exports.Camera = Camera;
//# sourceMappingURL=camera.entity.js.map