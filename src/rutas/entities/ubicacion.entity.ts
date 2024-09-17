/* eslint-disable prettier/prettier */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Conexion } from "./conexion.entity";

@Entity()
export class Ubicacion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    nombre: string;

    @Column()
    posX: number;

    @Column()
    posY: number;

    @OneToMany(() => Conexion, (conexion) => conexion.ubicacion1)
    conexion1: Conexion[];

    @OneToMany(() => Conexion, (conexion) => conexion.ubicacion2)
    conexion2: Conexion[];
}