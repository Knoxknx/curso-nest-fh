import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/services/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) { }

  populateDB() {
    this.carsService.fillCarsWithSeedDate(CARS_SEED);
    this.brandsService.fillBrandsWithSeedDate(BRAND_SEED);
    return `This action adds all the cars and brands`;
  }
}
