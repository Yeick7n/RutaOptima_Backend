/* eslint-disable prettier/prettier */
import { Conexion } from "src/conexion/entities/conexion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ubicacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    nombre: string;

    @Column()
    posX: number;

    @Column()
    posY: number;

    @OneToMany(() => Conexion, (conexion) => conexion.ubicacion1, { eager: true })
    inicio: Conexion[];

    @OneToMany(() => Conexion, (conexion) => conexion.ubicacion2, { eager: true })
    fin: Conexion[];
}
