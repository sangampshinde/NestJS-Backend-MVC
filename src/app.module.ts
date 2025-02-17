// ROOT MODULE of your application
// it imports and exports other modules,components and providers
// main blue print of your application
// we segrigate our code using modules


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
