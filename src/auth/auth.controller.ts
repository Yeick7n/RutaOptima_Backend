/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './dto/login';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usuariosService: UsuariosService,
  ) {}

  @Post('registro')
  async registro(@Body() registro: RegisterDto) {
    return await this.authService.registro(registro)
  }

  @Get('confirmar/:token')
  async confirmar(@Param('token') token: string) {
    const userFound = await this.usuariosService.findconfirmToken(token);

    if (!userFound) {
      throw new Error('User not found');
    }
    if (userFound.isConfirmed === true) {
      throw new Error('User already confirmed');
    }

    userFound.isConfirmed = true;
    const userUpdated = await this.usuariosService.update(userFound.id, userFound);

    return {
      message: 'User confirmed', 
      user: userUpdated
    }
  }
  
  @Post('login')
  async login(@Body() login: LoginDto){
    return await this.authService.login(login)
  }
}
