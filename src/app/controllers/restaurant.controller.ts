// src/app/controllers/restaurant.controller.ts
import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { RestaurantService } from '../services/restaurant.service';
import { CreateRestaurantDto } from '../dtos/create-restaurant.dto'; 

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async getAllRestaurants() {
    return this.restaurantService.getAllRestaurants();
  }

  @Post()
  async createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.createRestaurant(createRestaurantDto);
  }

  @Delete(':id')
  async deleteRestaurant(@Param('id') id: string) {
    return this.restaurantService.deleteRestaurant(id);
  }
}
