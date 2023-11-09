import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from 'src/cars/dto/create-car.dto';
import { UpdateCarDto } from 'src/cars/dto/update-car.dto';
import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Ferrari',
    //   model: 'F50',
    // }
  ]

  public getAllCars() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    return car;
  }

  public createNewCar(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    }
    this.cars.push(newCar);
    return newCar;
  }

  public updateCar(id: string, updateCarDto: UpdateCarDto) {
    let updateCar = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) throw new BadRequestException(`You can't change the id of the car`);


    this.cars = this.cars.map(car => {
      if (car.id === id) {
        updateCar = { ...updateCar, ...updateCarDto, id }
        return updateCar;
      }
      return car;
    });
    return updateCar;
  }

  public deleteCar(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter(car => car.id !== id);
    return car;
  }

  fillCarsWithSeedDate(cars: Car[]) {
    this.cars = cars;
  }

}
