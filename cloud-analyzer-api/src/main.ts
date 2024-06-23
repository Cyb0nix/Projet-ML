import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {json, urlencoded} from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Cloud Analyzer API')
      .setDescription('Predict the weather based on the cloud coverage.')
      .setVersion('1.0')
      .addTag('cloud')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: 'https://cloud-analyzer.cybonix.fr/', // Replace with your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' // If you're using cookies or authorization headers
  });

  app.use(json({ limit: '100mb' })); // Adjust limit as needed
  app.use(urlencoded({ extended: true, limit: '100mb' }));

  await app.listen(3000);
}
bootstrap();