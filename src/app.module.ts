// ROOT MODULE of your application
// it imports and exports other modules,components and providers
// main blue print of your application
// we segrigate our code using modules


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [UsersModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
