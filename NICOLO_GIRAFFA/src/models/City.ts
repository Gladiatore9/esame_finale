
import mongoose, { Document, Schema } from 'mongoose';

export interface City {
  name: string;
  population: number;
  men: number;
  women: number;
  isCapital: boolean;
}

export type CityDocument = City & Document;

const citySchema = new Schema<CityDocument>({
  name: { type: String, required: true },
  population: { type: Number, required: true },
  men: { type: Number, required: true },
  women: { type: Number, required: true },
  isCapital: { type: Boolean, required: true },
});

export const CityModel = mongoose.model<CityDocument>('City', citySchema);
