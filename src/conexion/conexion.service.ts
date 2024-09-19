/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateConexionDto } from './dto/create-conexion.dto';
import { UpdateConexionDto } from './dto/update-conexion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Conexion } from './entities/conexion.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ConexionService {

  constructor(@InjectRepository(Conexion) private conexionRepository: Repository<Conexion>) {}
  async create(createConexionDto: CreateConexionDto) {
    const newConexion = this.conexionRepository.create(createConexionDto);
    return this.conexionRepository.save(newConexion);
  }

  async findAll() {
    const conexiones = await this.conexionRepository.find()

    return conexiones
  }

  async findOne(id: number) {
    const conexionFound = await this.conexionRepository.findOne({
      where: {
        id,
      }
    });

    if(!conexionFound){
      throw new Error('No se encontro la conexion');
    }

    return conexionFound;
  }

  async update(id: number, updateConexionDto: UpdateConexionDto) {

    const conexionFound = await this.conexionRepository.findOne({
      where: {
        id,
      }
    });

    if(!conexionFound){
      throw new Error('No se encontro la conexion');
    }

    return this.conexionRepository.update(id, updateConexionDto);

  }

  async remove(id: number) {
    const conexionFound = await this.conexionRepository.findOne({
      where: {
        id,
      }
    });

    if(!conexionFound){
      throw new Error('No se encontro la conexion');
    }

    return this.conexionRepository.delete(id);
  }
}
