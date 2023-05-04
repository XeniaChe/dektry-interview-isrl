import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: '*',
  };
  app.enableCors(corsOptions);
  const config = app.get(ConfigService);
  await app.listen(config.get('app.post'));
}

bootstrap();
