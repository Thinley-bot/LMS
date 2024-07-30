import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log("================Application is starting================");
  const app = await NestFactory.create(AppModule);
  
  //api versioning------------------------
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
  }))
  const port=await app.listen(3000);
  console.log(`================Application has started================`);
}
bootstrap();
