import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/registro.dto';
import { Observable } from 'rxjs';
import { Request, Response } from 'express';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
export declare class RegistroController {
    private registroService;
    private rabbitmqService;
    execRabbitmq: boolean;
    constructor(registroService: RegistroService, rabbitmqService: RabbitmqService);
    listarRegistro(req: Request): Promise<import("./entities/registro.entity").Registro[]>;
    cadastrarRegistros(registro: CreateRegistroDto): Promise<any>;
    atualizarRegistro(registro_id: any): Promise<void>;
    buscarUltimoRegistro(): Promise<{
        enviado: number;
        msg: string;
    }>;
    Notificar(response: Response, request: Request): Promise<Observable<any>>;
}
