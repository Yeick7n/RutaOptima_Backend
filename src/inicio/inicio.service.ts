/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateInicioDto } from './dto/create-inicio.dto';
import { UpdateInicioDto } from './dto/update-inicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inicio } from './entities/inicio.entity';
import { Repository } from 'typeorm';



@Injectable()
export class InicioService {

  constructor(@InjectRepository(Inicio) private inicioRepository: Repository<Inicio>) {}
  async create(createInicioDto:CreateInicioDto) {
    const newInicio = this.inicioRepository.create(createInicioDto);
    return this.inicioRepository.save(newInicio);
  }

  async findAll() {
    const inicios = await this.inicioRepository.find()

    return inicios
  }


  async findOne(id: number) {
    const inicioFound = await this.inicioRepository.findOne({
      where: {
        id,
      }
    });

    if(!inicioFound){
      throw new Error('No se encontro el inicio');
    }

    return inicioFound;
  }

  async update(id: number, updateInicioDto: UpdateInicioDto) {

    const inicioFound = await this.inicioRepository.findOne({
      where: {
        id,
      }
    });

    if(!inicioFound){
      throw new Error('No se encontro el inicio');
    }

    return this.inicioRepository.update(id, updateInicioDto);

  }

  async remove(id: number) {
    const inicioFound = await this.inicioRepository.findOne({
      where: {
        id,
      }
    });

    if(!inicioFound){
      throw new Error('No se encontro el inicio');
    }

    return this.inicioRepository.delete(id);
  }
}
