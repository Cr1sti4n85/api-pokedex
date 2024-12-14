import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EnvConfiguration } from './config/app.config';

async function bootstrap() {
  const { port } = EnvConfiguration();

  const app = await NestFactory.create(AppModule);
  //el global prefix para que las rutas empiecen con /api/v2/...
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      //opciones para transformar tipos de variables
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(port);
  console.log(`Application running on port ${port}`);
}
bootstrap();
