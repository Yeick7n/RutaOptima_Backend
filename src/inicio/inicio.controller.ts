/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InicioService } from './inicio.service';
import { CreateInicioDto } from './dto/create-inicio.dto';
import { UpdateInicioDto } from './dto/update-inicio.dto';

@Controller('inicio')
export class InicioController {
  constructor(private readonly inicioService: InicioService) {}

  @Post('crear')
  create(@Body() createInicioDto: CreateInicioDto) {
    return this.inicioService.create(createInicioDto);
  }

  @Get('obtenerTodos')
  findAll() {
    return this.inicioService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.inicioService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: number, @Body() updateInicioDto: UpdateInicioDto) {
    return this.inicioService.update(id, updateInicioDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: number) {
    return this.inicioService.remove(id);
  }
}
