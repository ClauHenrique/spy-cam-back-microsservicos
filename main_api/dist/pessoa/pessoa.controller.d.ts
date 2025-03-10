/// <reference types="multer" />
import { PessoaService } from './pessoa.service';
import { Pessoa } from './entities/pessoa.entity';
import { ApiFaceRecoService } from 'src/api-face-reco/api-face-reco.service';
import { Request } from 'express';
export declare class PessoaController {
    private pessoaService;
    private apiRecogService;
    constructor(pessoaService: PessoaService, apiRecogService: ApiFaceRecoService);
    cadastrarPessoa(pessoa: Pessoa, fotos: Array<Express.Multer.File>, usuario?: any): Promise<void>;
    listarPessoas(req: Request): Promise<Pessoa[]>;
    apagarPessoa(pessoa_id: any): Promise<{
        dados: string;
    }>;
}
