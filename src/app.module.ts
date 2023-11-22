import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './app/modules/restaurant/restaurant.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://awad:AbdouAwad95@cluster0.ku6666y.mongodb.net/?retryWrites=true&w=majority'), RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
