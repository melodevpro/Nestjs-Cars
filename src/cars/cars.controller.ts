import { Controller } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    getAllCars() {
        return ['Toyota', 'Ford', 'Mazda', 'Honda'];
    }
}
