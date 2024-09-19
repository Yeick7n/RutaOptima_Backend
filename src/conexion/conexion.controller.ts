/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConexionService } from './conexion.service';
import { CreateConexionDto } from './dto/create-conexion.dto';
import { UpdateConexionDto } from './dto/update-conexion.dto';

@Controller('conexion')
export class ConexionController {
  constructor(private readonly conexionService: ConexionService) {}

  @Post('crear')
  create(@Body() createConexionDto: CreateConexionDto) {
    return this.conexionService.create(createConexionDto);
  }

  @Get('obtenerTodos')
  findAll() {
    return this.conexionService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.conexionService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: number, @Body() updateConexionDto: UpdateConexionDto) {
    return this.conexionService.update(id, updateConexionDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: number) {
    return this.conexionService.remove(id);
  }
}
