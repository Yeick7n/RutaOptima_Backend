/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import { CargueArchivoModule } from './cargue-archivo/cargue-archivo.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { ConexionModule } from './conexion/conexion.module';
import { InicioModule } from './inicio/inicio.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234567890',
      database: 'ruta-optima',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UsuariosModule,
    EmailModule,
    CargueArchivoModule,
    UbicacionModule,
    ConexionModule,
    InicioModule,
    CargueArchivoModule,
  ], 
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
