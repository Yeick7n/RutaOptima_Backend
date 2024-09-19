import { Module } from '@nestjs/common';
import { CargueArchivoService } from './cargue-archivo.service';
import { CargueArchivoController } from './cargue-archivo.controller';
import { UbicacionModule } from 'src/ubicacion/ubicacion.module';
import { ConexionModule } from 'src/conexion/conexion.module';
import { InicioModule } from 'src/inicio/inicio.module';

@Module({
  imports: [UbicacionModule, ConexionModule, InicioModule],
  providers: [CargueArchivoService],
  controllers: [CargueArchivoController],
  exports: [CargueArchivoService],
})
export class CargueArchivoModule {}
