/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { CargarDatosService } from './cargar-datos/cargar-datos.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // const cargarDatosService =app.get(CargarDatosService)

  // await cargarDatosService.cargarJson();
  // await app.close();
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  app.enableCors();
  await app.listen(3001);

  
}
bootstrap();
