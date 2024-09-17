/* eslint-disable prettier/prettier */
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUsuarioDto {

    @IsNotEmpty()
    fullName: string;

    @Transform(({ value }) => value.trim())
    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsNotEmpty()
    password: string;

    confirmToken: string;

    isConfirmed: boolean;
}
