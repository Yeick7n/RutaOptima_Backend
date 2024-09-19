/* eslint-disable prettier/prettier */
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CargueArchivoService } from './cargue-archivo.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cargue-archivo')
export class CargueArchivoController {

    constructor(
        private readonly cargueDatosService: CargueArchivoService
    ){}

    @Post('json')
    @UseInterceptors(FileInterceptor('file'))
    async uploadJson(@UploadedFile() file: Express.Multer.File): Promise<string> {
        return await this.cargueDatosService.processJson(file);
    }
}
