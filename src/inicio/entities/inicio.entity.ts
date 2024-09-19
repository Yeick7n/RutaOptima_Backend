/* eslint-disable prettier/prettier */
import { Ubicacion } from "src/ubicacion/entities/ubicacion.entity";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inicio {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Ubicacion)
    @JoinColumn()
    inicio: Ubicacion;
}
