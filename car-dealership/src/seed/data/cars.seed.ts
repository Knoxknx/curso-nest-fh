import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Ferrari',
    model: 'F50',
  },
  {
    id: uuid(),
    brand: 'Lamborghini',
    model: 'Diablo',
  },
  {
    id: uuid(),
    brand: 'Porsche',
    model: '911',
  },
];