/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RutasService } from './rutas.service';
import { RutasController } from './rutas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { Conexion } from './entities/conexion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ubicacion, Conexion])],
  controllers: [RutasController],
  providers: [RutasService],
})
export class RutasModule {}
