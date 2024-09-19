/* eslint-disable prettier/prettier */

import { Ubicacion } from "src/ubicacion/entities/ubicacion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conexion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  peso: number;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.inicio, {eager: true})
  ubicacion1: Ubicacion;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.fin, {eager: true})
  ubicacion2: Ubicacion;
}
