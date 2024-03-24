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
exports.Usuario_Pessoa = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const pessoa_entity_1 = require("../../pessoa/entities/pessoa.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
let Usuario_Pessoa = class Usuario_Pessoa extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => usuario_entity_1.Usuario),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Usuario_Pessoa.prototype, "usuario_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => usuario_entity_1.Usuario),
    __metadata("design:type", usuario_entity_1.Usuario)
], Usuario_Pessoa.prototype, "usuario", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => pessoa_entity_1.Pessoa),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Usuario_Pessoa.prototype, "pessoa_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => pessoa_entity_1.Pessoa),
    __metadata("design:type", pessoa_entity_1.Pessoa)
], Usuario_Pessoa.prototype, "pessoa", void 0);
Usuario_Pessoa = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'usuario_pessoa' })
], Usuario_Pessoa);
exports.Usuario_Pessoa = Usuario_Pessoa;
//# sourceMappingURL=usuario_pessoa.entity.js.map