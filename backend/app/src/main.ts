import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './my-logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.enableCors();
  app.useLogger(app.get(MyLoggerService))
  await app.listen(5000);
}
bootstrap();
