import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS
  await app.listen(4000);
  console.log(`🚀 Server is runnnnning on http://localhost:4000...`);
}
bootstrap();
