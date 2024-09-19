/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConexionService } from './conexion.service';
import { ConexionController } from './conexion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conexion } from './entities/conexion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Conexion])],
  controllers: [ConexionController],
  providers: [ConexionService],
  exports: [ConexionService],
})
export class ConexionModule {}
