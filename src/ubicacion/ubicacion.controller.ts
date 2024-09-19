/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@Controller('ubicacion')
export class UbicacionController {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @Post('crear')
  create(@Body() createUbicacionDto: CreateUbicacionDto) {
    return this.ubicacionService.create(createUbicacionDto);
  }

  @Get('obtenerTodos')
  findAll() {
    return this.ubicacionService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.ubicacionService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: number, @Body() updateUbicacionDto: UpdateUbicacionDto) {
    return this.ubicacionService.update(id, updateUbicacionDto);
  }

  @Delete('elimninar/:id')
  remove(@Param('id') id: number) {
    return this.ubicacionService.remove(id);
  }
}
