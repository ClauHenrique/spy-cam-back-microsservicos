import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/registro.dto';
import { Observable } from 'rxjs';
import { Request, Response } from 'express';
export declare class RegistroController {
    private registroService;
    constructor(registroService: RegistroService);
    listarRegistro(req: Request): Promise<import("./entities/registro.entity").Registro[]>;
    cadastrarRegistros(registro: CreateRegistroDto): Promise<any>;
    atualizarRegistro(registro_id: any): Promise<void>;
    buscarUltimoRegistro(): Promise<{
        data: import("./entities/registro.entity").Registro[];
    }>;
    Notificar(response: Response): Promise<Observable<any>>;
}
