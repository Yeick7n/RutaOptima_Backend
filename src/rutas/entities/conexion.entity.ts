/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ubicacion } from "./ubicacion.entity";


@Entity()
export class Conexion {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.conexion1)
    ubicacion1: Ubicacion;

    @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.conexion2)
    ubicacion2: Ubicacion;

    @Column()
    peso: number;
}