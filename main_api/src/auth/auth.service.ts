import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.services';
import { CameraService } from 'src/camera/camera.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private cameraService: CameraService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, senha: string) {
    try {
      
      const user = await this.usuarioService.login(email);
      
      
      const senhaValidada = await bcrypt.compare(senha, user.senha);

      if (senhaValidada) {
        const payload = { email: user.email, sub: user.id };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
      throw new NotFoundException('Usuário não encontrado');
    } catch (err) {
      console.log(err);
      
      throw new UnauthorizedException('senha incorreta');
    }
  }

  async loginFromCar(email: string, senha: string){
    try {
      
      const user = await this.usuarioService.login(email);

      const senhaValidada = await bcrypt.compare(senha, user.senha);

      if (senhaValidada) {

        const cam = await this.cameraService.getCamById(user.id)

        if (!cam) {
            const newCam = await this.cameraService.create({
              usuario_id: user.id
            })
            
            return {id_camera: newCam.id};
     }

      return {id_camera: cam.id};
      }
      
      throw new NotFoundException('Usuário não encontrado');
    } catch (err) {
      console.log(err);
      
      throw new UnauthorizedException('senha incorreta');
    }
  }
}
