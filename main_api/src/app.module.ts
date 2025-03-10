import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Usuario } from './usuario/entities/usuario.entity';
import { PessoaModule } from './pessoa/pessoa.module';
import { RegistroModule } from './registro/registro.module';
import { Pessoa } from './pessoa/entities/pessoa.entity';
import { AuthModule } from './auth/auth.module';
import { UsuarioPessoaModule } from './usuario_pessoa/usuario_pessoa.module';
import { Usuario_Pessoa } from './usuario_pessoa/entities/usuario_pessoa.entity';
import { Registro } from './registro/entities/registro.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ApiFaceRecoService } from './api-face-reco/api-face-reco.service';
import { ApiFaceRecoModule } from './api-face-reco/api-face-reco.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';



dotenv.config();


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DBHOST,
      port: parseInt(process.env.DBPORT),
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: 'spy_cam',
      models: [Usuario, Pessoa, Registro, Usuario_Pessoa],
      synchronize: true,
      autoLoadModels: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'arquivos/pessoas'),
    }),
    UsuarioModule,
    PessoaModule,
    RegistroModule,
    AuthModule,
    UsuarioPessoaModule,
    ApiFaceRecoModule,
    RabbitmqModule,
  ],
  providers: [ApiFaceRecoService],
})
export class AppModule { }