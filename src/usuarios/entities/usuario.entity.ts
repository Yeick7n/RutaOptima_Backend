/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    user: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    confirmToken: string;

    @Column({ default: false })
    isConfirmed: boolean;
}
