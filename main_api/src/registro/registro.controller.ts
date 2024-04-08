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

  execRabbitmq: boolean = true

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
 


  @Public()
  @Post('/cadastro')
  async cadastrarRegistros(@Body() registro: CreateRegistroDto): Promise<any> {
    return this.registroService.cadastrarRegistro(registro);
  }

  @Public()
  @Patch(':registro_id')
  async atualizarRegistro(@Param() registro_id) {
    await this.registroService.atualizarRegistro();
  }

  async buscarUltimoRegistro() {
    // const registro = await this.registroService.listarUltimoRegistro();
   
    // // nao tem como atualizar um registro se nao houver registro la.
    // // entao podemos retornar um registro vazio sem problemas
    // if (registro.length > 0) {
    //   await this.registroService.atualizarRegistro() 
    // }
    
    return { enviado: 1, msg: "pessoa..." };
  }

  // @Public()
  // @Sse('sse')
  // Notificar(): Observable<MessageEvent> {

  //   this.rabbitmqService.ConsumeMessageRabbitmq(3)
    
  //   return interval(1000).pipe(map((_) => (this.rabbitmqService.getMessages())));
  // }

 
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
 