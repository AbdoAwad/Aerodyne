// restaurant.model.ts
import { Schema, Document, model } from 'mongoose';

export interface Restaurant extends Document {
  name: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  type: string;
}

const restaurantSchema = new Schema<Restaurant>({
  name: { type: String, required: true },
  coordinates: {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
  },
  type: { type: String, required: true },
});

export const RestaurantModel = model<Restaurant>('Restaurant', restaurantSchema);
