import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Activate Global Validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const corsOptions: CorsOptions = {
    origin: '*',
  };
  app.enableCors(corsOptions);
  const config = app.get(ConfigService);
  await app.listen(config.get('app.post'));
}

bootstrap();
