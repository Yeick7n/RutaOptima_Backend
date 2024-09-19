/* eslint-disable prettier/prettier */

import { Ubicacion } from "src/ubicacion/entities/ubicacion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conexion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  peso: number;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.inicio)
  ubicacion1: Ubicacion;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.fin)
  ubicacion2: Ubicacion;
}
