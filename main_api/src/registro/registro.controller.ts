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
    ) {}

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
    
    return { data: [] };
  }

  @Public()
  @Sse('sse')
  Notificar(): Observable<MessageEvent> {

    this.rabbitmqService.ConsumeMessageRabbitmq(3)
    
    return interval(1000).pipe(map((_) => (this.rabbitmqService.getMessages())));
  }

} 
 