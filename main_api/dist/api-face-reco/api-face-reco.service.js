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
exports.ApiFaceRecoService = void 0;
const common_1 = require("@nestjs/common");
const file_from_path_1 = require("formdata-node/file-from-path");
const formdata_node_1 = require("formdata-node");
let ApiFaceRecoService = class ApiFaceRecoService {
    constructor(apiRecogService) {
        this.apiRecogService = apiRecogService;
    }
    async sendImgPerson(filename) {
        const pathImg = "./arquivos/pessoas/" + filename;
        const form = new formdata_node_1.FormData();
        form.set("photo", await (0, file_from_path_1.fileFromPath)(pathImg));
        await this.apiRecogService.post('/server/create-person', form);
    }
};
ApiFaceRecoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AxiosInstance')),
    __metadata("design:paramtypes", [Object])
], ApiFaceRecoService);
exports.ApiFaceRecoService = ApiFaceRecoService;
//# sourceMappingURL=api-face-reco.service.js.map