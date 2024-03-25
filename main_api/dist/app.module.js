"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_module_1 = require("./usuario/usuario.module");
const sequelize_1 = require("@nestjs/sequelize");
const dotenv = require("dotenv");
const usuario_entity_1 = require("./usuario/entities/usuario.entity");
const pessoa_module_1 = require("./pessoa/pessoa.module");
const registro_module_1 = require("./registro/registro.module");
const pessoa_entity_1 = require("./pessoa/entities/pessoa.entity");
const auth_module_1 = require("./auth/auth.module");
const usuario_pessoa_module_1 = require("./usuario_pessoa/usuario_pessoa.module");
const usuario_pessoa_entity_1 = require("./usuario_pessoa/entities/usuario_pessoa.entity");
const registro_entity_1 = require("./registro/entities/registro.entity");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const api_face_reco_service_1 = require("./api-face-reco/api-face-reco.service");
const api_face_reco_module_1 = require("./api-face-reco/api-face-reco.module");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.DBHOST,
                port: parseInt(process.env.DBPORT),
                username: process.env.DBUSER,
                password: process.env.DBPASSWORD,
                database: 'spy_cam',
                models: [usuario_entity_1.Usuario, pessoa_entity_1.Pessoa, registro_entity_1.Registro, usuario_pessoa_entity_1.Usuario_Pessoa],
                synchronize: true,
                autoLoadModels: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../', 'arquivos/pessoas'),
            }),
            usuario_module_1.UsuarioModule,
            pessoa_module_1.PessoaModule,
            registro_module_1.RegistroModule,
            auth_module_1.AuthModule,
            usuario_pessoa_module_1.UsuarioPessoaModule,
            api_face_reco_module_1.ApiFaceRecoModule,
        ],
        providers: [api_face_reco_service_1.ApiFaceRecoService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map