import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateCarDto } from 'src/cars/dto/create-car.dto';
import { UpdateCarDto } from 'src/cars/dto/update-car.dto';
import { CarsService } from 'src/cars/services/cars/cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post('/save')
  saveNewCar(@Body() data: CreateCarDto) {
    return this.carsService.createNewCar(data);
  }

  @Patch('/updateCar/:id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() data: UpdateCarDto) {
    return this.carsService.updateCar(id, data);
  }

  @Delete('/deleteCar/:id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
