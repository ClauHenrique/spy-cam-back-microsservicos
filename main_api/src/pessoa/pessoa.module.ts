import { Module } from '@nestjs/common';
import { Pessoa } from './entities/pessoa.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { Usuario_Pessoa } from '../usuario_pessoa/entities/usuario_pessoa.entity';
import { ApiFaceRecoModule } from 'src/api-face-reco/api-face-reco.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Pessoa, Usuario_Pessoa]),
    ApiFaceRecoModule
  ],
  providers: [PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
