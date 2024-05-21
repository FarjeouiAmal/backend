// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { AuthService } from './auth/auth.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const authService = app.get(AuthService);
  await authService.createDefaultAdmin();

  // Utiliser un tuyau de validation globale (par exemple, class-validator)
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS for both frontend applications
  app.enableCors({
    origin: ['http://localhost:3003', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  });

  await app.listen(3004);
}
bootstrap();
