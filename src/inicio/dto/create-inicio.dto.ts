/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { Ubicacion } from "src/ubicacion/entities/ubicacion.entity";

export class CreateInicioDto {

    @IsNotEmpty()
    inicio: Ubicacion;
}
