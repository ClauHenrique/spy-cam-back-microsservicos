import { RegistroService } from './registro.service';
import { Observable } from 'rxjs';
import { Request, Response } from 'express';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
export declare class RegistroController {
    private registroService;
    private rabbitmqService;
    constructor(registroService: RegistroService, rabbitmqService: RabbitmqService);
    listarRegistro(req: Request): Promise<import("./entities/registro.entity").Registro[]>;
    Notificar(response: Response, request: Request): Promise<Observable<any>>;
}
