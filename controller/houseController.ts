import  { IDBService } from "../db/types/fake/fakeService"
import { House } from "../types/db/house";

export class HouseController{

    dbService: IDBService

    constructor(dbService: IDBService){
        this.dbService = dbService;
    }

    async getHousesByType(type: string, minPrice: number, maxPrice: number): Promise<House[]>{
        const houses = await this.dbService.getHouses(type, minPrice,maxPrice)
        return houses
    }

    sum(num1: number, num2: number): number {
        return num1 + num2;
    }
}