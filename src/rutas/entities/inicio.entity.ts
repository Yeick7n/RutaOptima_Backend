/* eslint-disable prettier/prettier */
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ubicacion } from "./ubicacion.entity";


@Entity()
export class Inicio {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Ubicacion)
    @JoinColumn()
    inicio: Ubicacion
}