/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { Repository } from 'typeorm';
const Graph = require('node-dijkstra');

@Injectable()
export class RutasService {

  private readonly logger = new Logger(RutasService.name)
  constructor(
    @InjectRepository(Ubicacion)
    private ubicacionRepository: Repository<Ubicacion>,
  ) {}

  async findRutaCorta(origenID: string, destinoID: string): Promise<string[]> {

    

    this.logger.debug(`Buscando la ruta más corta entre ${origenID} y ${destinoID}`);

    const graph = new Graph();

    const ubicaciones = await this.ubicacionRepository.find({
      relations: ['conexion1', 'conexion2'],
    });

    this.logger.debug(`Ubicaciones encontradas: ${ubicaciones.length}`);

    ubicaciones.forEach((ubicacion) => {
      const conexiones = {};

      this.logger.debug(`procesando ubicación: ${ubicacion.nombre}`);
      if (ubicacion.conexion1) {
        ubicacion.conexion1.forEach((conexion) => {
          if (conexion.ubicacion2) {
            conexiones[conexion.ubicacion2.nombre] = conexion.peso;
            this.logger.debug(`Añadiendo conexión: ${ubicacion.nombre} -> ${conexion.ubicacion2.nombre} con peso ${conexion.peso}`);
          }
        });
      }

      if (ubicacion.conexion2) {
        ubicacion.conexion2.forEach((conexion) => {
          if (conexion.ubicacion1) {
            conexiones[conexion.ubicacion1.nombre] = conexion.peso;
            this.logger.debug(`Añadiendo conexión: ${ubicacion.nombre} -> ${conexion.ubicacion1.nombre} con peso ${conexion.peso}`);
          }
        });
      }

      if(Object.keys(conexiones).length > 0) {
        graph.addNode(ubicacion.nombre, conexiones);
        this.logger.debug(`Nodo ${ubicacion.nombre} añadido con conexiones: ${JSON.stringify(conexiones)}`);
      }
    });

    const origen = await this.ubicacionRepository.findOne({
      where: {
        nombre: origenID,
      },
    });

    const destino = await this.ubicacionRepository.findOne({
      where: {
        nombre: destinoID,
      },
    });

    if(!origen) {
      this.logger.error(`ubicación de origen con ID ${origenID} no encontrada`);
      throw new Error('Ubicación de origen no encontrada');
    }

    if(!destino) {
      this.logger.error(`ubicación de destino con ID ${destinoID} no encontrada`);
      throw new Error('Ubicación de destino no encontrada');
    }

    this.logger.debug(`Buscando ruta desde ${origen.nombre} hasta ${destino.nombre}`);

    
    const ruta = graph.path(origen.nombre, destino.nombre);
    
    this.logger.debug(`Ruta encontrada: ${JSON.stringify(ruta)}`);
 

    return ruta || [];
    // if (origen && destino) {
    //   return graph.path(origen.nombre, destino.nombre);
    // } else {
    //   throw new Error('Ubicaciones no encontradas');
    // }
  }

  // async rutaCorta(origenID: string, destinoID: string) {
    
  //   const route = new Graph()

  //   const 

  //   route.addNode()
  // }
}
