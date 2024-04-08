import {
  Body,
  Controller,
  Get,
  MessageEvent,
  Param,
  Patch,
  Post,
  Req,
  Res,
  Sse,
} from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/registro.dto';
import { Observable, defer, interval, map, repeat, tap} from 'rxjs';
import { Request, Response } from 'express';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';


@Controller('registro')
export class RegistroController {

  constructor(
    private registroService: RegistroService,
    private rabbitmqService: RabbitmqService
    ) {
      this.rabbitmqService.ConsumeMessageRabbitmq()
    }

  @Get()
  async listarRegistro(@Req() req: Request) {
    const id_usuario: number = req['user'].sub
    return this.registroService.listarRegistros(id_usuario);
  }
 
 
  @Sse('sse')
  async Notificar(@Res() response: Response, @Req() request: Request): Promise<Observable<any>> {

    const id_user: number = request['user'].sub
   
    response.setHeader('Content-Type', 'text/event-stream');
    response.setHeader('Cache-Control', 'no-cache');
    response.setHeader('Connection', 'keep-alive');

    return defer(() => this.rabbitmqService.getMessages(id_user)).pipe(
      repeat({
        delay: 1000,
      }),
      tap((registro) => {
        console.log(registro);
          setTimeout(() => {
            response.end();
          }, 2000);
      }),
      map((registro) => ({
        type: 'message',
        data: registro,
      })),
    );
  }

} 
 