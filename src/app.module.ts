/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EmailModule } from './email/email.module';
import { RutasModule } from './rutas/rutas.module';
import { ConfigModule } from '@nestjs/config';
// import { CargarDatosService } from './cargar-datos/cargar-datos.service';
// import { CargarDatosModule } from './cargar-datos/cargar-datos.module';


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

  }), AuthModule, UsuariosModule, EmailModule, RutasModule,], // CargarDatosModule],
  controllers: [AppController],
  providers: [AppService], // CargarDatosService],
})
export class AppModule {}
