import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'sequelize-typescript';
import { Usuario_Pessoa } from '../usuario_pessoa/entities/usuario_pessoa.entity';
export declare class PessoaService {
    private pessoaRepository;
    private usuarioPessoaRepository;
    constructor(pessoaRepository: Repository<Pessoa>, usuarioPessoaRepository: Repository<Usuario_Pessoa>);
    cadastrarPessoa(pessoa: any, fotos: any, usuario: any): Promise<{
        msg: string;
    }>;
    listarPessoas(id_usuario: number): Promise<Pessoa[]>;
    removerPessoa(pessoa_id: any): Promise<{
        dados: string;
    }>;
}
