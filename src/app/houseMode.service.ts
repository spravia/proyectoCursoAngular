import { Injectable } from "@angular/core";
import { IModelHouse } from './modelHouses';

@Injectable()
export class HouseModelService{

    getHouseModel(): IModelHouse[] {
        return [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "CASA-MOD-2A",
                "description": "Casa Modelo 2A",
                "price": 132000.00,
                "imageUrl": "/assets/houseModel.png"
            },
            {
                "productId": 2,
                "productName": "Terracota",
                "productCode": "CASA-MOD-2A",
                "description": "Casa Modelo 2A",
                "price": 152152.00,
                "imageUrl": "/assets/houseModel.png"
            },
            {
                "productId": 3,
                "productName": "Mediterraneo",
                "productCode": "CASA-MOD-2A",
                "description": "Casa Modelo 2 Floor",
                "price": 142000.00,
                "imageUrl": "/assets/houseModel.png"
            },
            {
                "productId": 4,
                "productName": "Summer Time",
                "productCode": "CASA-MOD-4A",
                "description": "Casa Modelo 3 Plantas",
                "price": 162000.00,
                "imageUrl": "/assets/houseModel.png"
            },
            {
                "productId": 5,
                "productName": "Spring",
                "productCode": "CASA-MOD-5A",
                "description": "Casa Modelo con garage",
                "price": 200000.00,
                "imageUrl": "/assets/houseModel.png"
            }
        ]


        }
}