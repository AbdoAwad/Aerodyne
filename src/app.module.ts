import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './app/modules/restaurant/restaurant.module'

@Module({
  imports: [MongooseModule.forRoot('add-your-mangodb'), RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
