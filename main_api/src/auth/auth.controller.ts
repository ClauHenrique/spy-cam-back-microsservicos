import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: Record<string, any>) {
    return this.authService.login(loginDto.email, loginDto.senha);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login-car')
  loginFromCar(@Body() loginDto: Record<string, any>) {
    return this.authService.loginFromCar(loginDto.email, loginDto.senha);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
