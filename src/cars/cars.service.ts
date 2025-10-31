import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id:1,
            brand: 'Toyota',
            name: 'Corolla'
        },
        {
            id:2,
            brand: 'Honda',
            name: 'Civic'
        },
        {
            id:3,
            brand: 'Jeep',
            name: 'Cherokee'
        },
        {
            id:4,
            brand: 'Ford',
            name: 'Mustang'
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        const car = this.cars.find( car => car.id === id );
        return car;
    }

}
