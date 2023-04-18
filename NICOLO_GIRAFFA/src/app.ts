import express from 'express';
import mongoose from 'mongoose';
import { CityModel } from './models/City';
import { cityRoutes } from "../src/routes/Cityroutes";

const app = express();

const cities = [
  {
    name: "Roma",
    population: 2870528,
    malePopulation: 1386434,
    femalePopulation: 1484094,
    isCapital: true,
  },
  {
    name: "Milano",
    population: 1378689,
    malePopulation: 666032,
    femalePopulation: 712657,
    isCapital: false,
  },
  {
    name: "Napoli",
    population: 975260,
    malePopulation: 468738,
    femalePopulation: 506522,
    isCapital: false,
  },
  {
    name: "Torino",
    population: 859131,
    malePopulation: 409387,
    femalePopulation: 449744,
    isCapital: false,
  },
  {
    name: "Palermo",
    population: 655875,
    malePopulation: 313492,
    femalePopulation: 342383,
    isCapital: false,
  },
  {
    name: "Genova",
    population: 580097,
    malePopulation: 280873,
    femalePopulation: 299224,
    isCapital: false,
  },
  {
    name: "Bologna",
    population: 390458,
    malePopulation: 182813,
    femalePopulation: 207645,
    isCapital: false,
  },
  {
    name: "Firenze",
    population: 382258,
    malePopulation: 177399,
    femalePopulation: 204859,
    isCapital: false,
  },
  {
    name: "Bari",
    population: 325184,
    malePopulation: 153072,
    femalePopulation: 172112,
    isCapital: false,
  },
  {
    name: "Catania",
    population: 315576,
    malePopulation: 149004,
    femalePopulation: 166572,
    isCapital: false,
  },
];


const MONGODB_URI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(MONGODB_URI, {
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

app.use(express.json());

app.use(cityRoutes);



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


