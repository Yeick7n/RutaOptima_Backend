/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConexionService } from 'src/conexion/conexion.service';
import { InicioService } from 'src/inicio/inicio.service';
import { UbicacionService } from 'src/ubicacion/ubicacion.service';

@Injectable()
export class CargueArchivoService {
  constructor(
    private readonly ubicacionService: UbicacionService,
    private readonly conexionService: ConexionService,
    private readonly inicioService: InicioService,
  ) {}

  async processJson(file: Express.Multer.File): Promise<string> {
    const jsonData = JSON.parse(file.buffer.toString());

    const ubicaciones = jsonData.ubicaciones;
    const conexiones = jsonData.conexiones;
    const inicios = jsonData.inicios;

    // PROCESAR UBICACIONES

    for (const ubicacion of ubicaciones) {
      const nuevaUbicacion = {
        nombre: ubicacion.nombre,
        posX: ubicacion.posX,
        posY: ubicacion.posY,
      };

      await this.ubicacionService.create(nuevaUbicacion);
    }

    for (const conexion of conexiones) {
      const ubicacion1 = await this.ubicacionService.findByName(
        conexion.ubicacion1,
      );
      const ubicacion2 = await this.ubicacionService.findByName(
        conexion.ubicacion2,
      );

      const nuevaConexion = {
        ubicacion1,
        ubicacion2,
        peso: conexion.peso,
      };

      await this.conexionService.create(nuevaConexion);
    }

    const ubicacionInicio = await this.ubicacionService.findByName(inicios);
    const nuevoInicio = {
      inicio: ubicacionInicio,
    };

    await this.inicioService.create(nuevoInicio);

    return "archivo procesado con exito";
  }

}
