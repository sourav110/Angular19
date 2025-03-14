export class Car {
    carId: number;
    brand?: string;
    model: string;
    year: string;
    color: string;
    dailyRate: string;
    carImage: string;
    regNo: string;

    /**
     *
     */
    constructor() {
        this.carId = 0;
        this.model = "";
        this.year = "";
        this.color = "";
        this.dailyRate = "";
        this.carImage = "";
        this.regNo = "";
    }
}

export interface ICar {
    carId: number,
    brand?: string,
    model: string,
    year: string,
    color: string,
    dailyRate: string,
    carImage: string,
    regNo: string
}