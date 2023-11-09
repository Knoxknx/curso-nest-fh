import { Module } from '@nestjs/common';
import { CarsController } from './controllers/cars/cars.controller';
import { CarsService } from './services/cars/cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService]
})
export class CarsModule { }
