// src/app/dtos/create-restaurant.dto.ts
export class CreateRestaurantDto {
  readonly name: string;
  readonly coordinates: {
    latitude: string;
    longitude: string;
  };
  readonly type: string;
}