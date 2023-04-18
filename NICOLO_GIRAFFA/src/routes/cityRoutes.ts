import express from 'express';
import { CityModel } from '../models/City';
import { body, header } from "express-validator";

const router = express.Router();

router.get('/cities', async (req, res) => {
  const { overPopulation } = req.query;

  if (overPopulation) {
    const cities = await CityModel.find({ population: { $gt: overPopulation } });
    res.send(cities);
  } else {
    const cities = await CityModel.find();
    res.send(cities);
  }
});

router.get('/cities/:id', async (req, res) => {
  const { id } = req.params;
  const city = await CityModel.findById(id);

  if (!city) {
    res.status(404).send('City not found');
  }

  res.send(city);
});

router.put('/cities/:id', async (req, res) => {
  const { id } = req.params;
  const { population, men, women, isCapital } = req.body;

  const city = await CityModel.findByIdAndUpdate(id, { population, men, women, isCapital }, { new: true });

  if (!city) {
    res.status(404).send('City not found');
  }

  res.send(city);
});

router.delete('/cities/:id', async (req, res) => {
  const { id } = req.params;

  const city = await CityModel.findByIdAndDelete(id);

  if (!city) {
    res.status(404).send('City not found');
  }

  res.send(city);
});


export { router as cityRoutes };
