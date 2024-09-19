import { Module } from '@nestjs/common';
import { RutaCortaService } from './ruta-corta.service';
import { RutaCortaController } from './ruta-corta.controller';

@Module({
  providers: [RutaCortaService],
  controllers: [RutaCortaController],
  exports: [RutaCortaService],
})
export class RutaCortaModule {}
