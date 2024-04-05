import { MessageEvent } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/registro.dto';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
export declare class RegistroController {
    private registroService;
    private rabbitmqService;
    constructor(registroService: RegistroService, rabbitmqService: RabbitmqService);
    listarRegistro(req: Request): Promise<import("./entities/registro.entity").Registro[]>;
    cadastrarRegistros(registro: CreateRegistroDto): Promise<any>;
    atualizarRegistro(registro_id: any): Promise<void>;
    buscarUltimoRegistro(): Promise<{
        data: any[];
    }>;
    Notificar(): Observable<MessageEvent>;
}
