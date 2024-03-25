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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
const pessoa_entity_1 = require("./entities/pessoa.entity");
const sequelize_1 = require("@nestjs/sequelize");
const usuario_pessoa_entity_1 = require("../usuario_pessoa/entities/usuario_pessoa.entity");
const fs = require("fs");
let PessoaService = class PessoaService {
    constructor(pessoaRepository, usuarioPessoaRepository) {
        this.pessoaRepository = pessoaRepository;
        this.usuarioPessoaRepository = usuarioPessoaRepository;
    }
    async cadastrarPessoa(pessoa, fotos, usuario) {
        try {
            const dados = { nome_pessoa: pessoa.nome_pessoa, fotos: fotos };
            const criado = await this.pessoaRepository.create(dados);
            await this.usuarioPessoaRepository.create({
                pessoa_id: criado.id,
                usuario_id: usuario,
            });
            return {
                msg: 'pessoa cadastrada com sucesso',
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Erro ao cadastrar pessoa' + err);
        }
    }
    async listarPessoas() {
        try {
            const pessoas = await this.pessoaRepository.findAll();
            return {
                dados: pessoas,
            };
        }
        catch (err) {
            throw new Error(`não foi posível listar ${err.message}`);
        }
    }
    async removerPessoa(pessoa_id) {
        try {
            const dados = JSON.stringify(pessoa_id);
            const regex = '[0-9]+';
            const id = dados.match(regex);
            const pessoa = await this.pessoaRepository.findOne({
                where: { id: id },
            });
            try {
                const caminho = pessoa.fotos.slice(0, -1);
                fs.unlinkSync(caminho);
                console.log('File removed:', caminho);
            }
            catch (err) {
                console.error(err);
            }
            await this.usuarioPessoaRepository.update({
                pessoa_id: null,
            }, { where: { pessoa_id: id } });
            await this.pessoaRepository.destroy({
                where: { id: id },
                cascade: true,
            });
            return {
                dados: 'removido com sucesso',
            };
        }
        catch (err) {
            throw new Error(`não foi posível remover`);
        }
    }
};
PessoaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(pessoa_entity_1.Pessoa)),
    __param(1, (0, sequelize_1.InjectModel)(usuario_pessoa_entity_1.Usuario_Pessoa)),
    __metadata("design:paramtypes", [Object, Object])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map