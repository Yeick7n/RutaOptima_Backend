/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUbicacionDto {

    @IsNotEmpty()
    @IsString()
    nombre: string

    @IsNotEmpty()
    @IsNumber()
    posX: number

    @IsNotEmpty()
    @IsNumber()
    posY: number


}
