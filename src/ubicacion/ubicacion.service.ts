/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Ubicacion)
    private ubicacionRepository: Repository<Ubicacion>,
  ) {}
  async create(createUbicacionDto: CreateUbicacionDto) {
    const newUbicacion = this.ubicacionRepository.create(createUbicacionDto);
    return this.ubicacionRepository.save(newUbicacion);
  }

  async findAll() {
    const ubicacion = await this.ubicacionRepository.find();

    return ubicacion;
  }

  async findOne(id: number) {
    const ubicacionFound = await this.ubicacionRepository.findOne({
      where: {
        id,
      },
    });

    if (!ubicacionFound) {
      throw new Error('No se encontro la conexion');
    }

    return ubicacionFound;
  }

  async update(id: number, updateUbicacionDto: UpdateUbicacionDto) {
    const ubicacionFound = await this.ubicacionRepository.findOne({
      where: {
        id,
      },
    });

    if (!ubicacionFound) {
      throw new Error('No se encontro la conexion');
    }

    return this.ubicacionRepository.update(id, updateUbicacionDto);
  }

  async remove(id: number) {
    const ubicacionFound = await this.ubicacionRepository.findOne({
      where: {
        id,
      },
    });

    if (!ubicacionFound) {
      throw new Error('No se encontro la conexion');
    }

    return this.ubicacionRepository.delete(id);
  }

  async findByName(nombre: string): Promise<Ubicacion> {
    const ubicacion = await this.ubicacionRepository.findOne({
      where: {
        nombre,
      },
    });

    if (!ubicacion) {
      throw new NotFoundException(
        `Ubicacion con el nombre ${nombre} no encontrada`,
      );
    }

    return ubicacion;
  }
}
