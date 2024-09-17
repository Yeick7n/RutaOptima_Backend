/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { RutasService } from './rutas.service';


@Controller('rutas')
export class RutasController {
  constructor(private readonly rutasService: RutasService) {}

  @Get('mas-corta/:origenID/:destinoID')
  async findRutaCorta(
    @Param('origenID') origenID: string, 
    @Param('destinoID') destinoID: string) {
      return this.rutasService.findRutaCorta(origenID, destinoID)
    }
}
