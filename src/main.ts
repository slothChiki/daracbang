import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Next from 'next';

async function bootstrap() {
  const nextDev = process.env.NODE_ENV == 'development'; // ✅ dev 모드
  const nextApp = Next({ dev: nextDev });

  await nextApp.prepare();

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
