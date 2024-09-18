/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { RegisterDto } from './dto/register';
import * as bcryptjs from 'bcryptjs';
import { EmailService } from 'src/email/email.service';
import { randomBytes } from 'crypto';
import { LoginDto } from './dto/login';


@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
  ) {}

  async registro(registro: RegisterDto) {
    const emailFound = await this.usuariosService.findOneByEmail(
      registro.email,
    );
    if (emailFound) {
      throw new Error('This email already exists in another user');
    }

    const userFound = await this.usuariosService.findOneByUser(registro.user);
    if (userFound) {
      throw new Error('This email already exists in another user');
    }

    const confirmToken = randomBytes(32).toString('hex');

    const newUser = await this.usuariosService.create({
      ...registro,
      password: await bcryptjs.hash(registro.password, 10),
      confirmToken,
      isConfirmed: false,
    });

    await this.emailService.enviarEmail(
      newUser.email,
      'CONFIRMACIÓN DE EMAIL',
      `Hola ${newUser.user}, \n\n Te damos la bienvenida a RutaOptima, gracias por registrarte en la plataforma.\n
      Por favor, confirma tu correo haciendo clic en el siguiente enlace: http://localhost:3000/confirmar/${confirmToken}`,
    );

    return newUser;
  }

  async login(login: LoginDto) {
    const emailFound = await this.usuariosService.findOneByEmail(login.email);

    if (!emailFound) {
      throw new Error('Credenciales incorrectas - e');
    }

    const passwordCompare = await bcryptjs.compare(
      login.password,
      emailFound.password,
    );

    if (!passwordCompare) {
      throw new Error('Credenciales incorrectas - p');
    }

    if (!emailFound.isConfirmed) {
      throw new Error('Email no confirmado');
    }

    const payload = {
      user: emailFound.user,
      sub: emailFound.id,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: emailFound,
    }
  }
}
