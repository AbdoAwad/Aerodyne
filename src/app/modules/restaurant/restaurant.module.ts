// src/app/modules/restaurant/restaurant.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantController } from '../../controllers/restaurant.controller';
import { RestaurantService } from '../../services/restaurant.service';
import { RestaurantModel } from '../../models/restaurant.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantModel.schema }])],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
