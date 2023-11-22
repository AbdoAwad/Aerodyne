// src/app/services/restaurant.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from '../models/restaurant.model';
import { CreateRestaurantDto } from '../dtos/create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel('Restaurant') private readonly restaurantModel: Model<Restaurant>) {}

  async getAllRestaurants() {
    return this.restaurantModel.find().exec();
  }

  async createRestaurant(createRestaurantDto: CreateRestaurantDto) {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return createdRestaurant.save();
  }

  async deleteRestaurant(id: string) {
    return this.restaurantModel.findByIdAndRemove(id).exec();
  }
}
