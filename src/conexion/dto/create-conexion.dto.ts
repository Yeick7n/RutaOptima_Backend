/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Ubicacion } from "src/ubicacion/entities/ubicacion.entity";


export class CreateConexionDto {

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    peso: number;

    ubicacion1: Ubicacion;
    
    ubicacion2: Ubicacion;
}
