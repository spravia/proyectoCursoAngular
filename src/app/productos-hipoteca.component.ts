import { Component, OnInit } from '@angular/core';
import { HouseModelService } from './houseMode.service';

@Component({
  selector: 'app-productos-hipoteca',
  templateUrl: './productos-hipoteca.component.html',
  styleUrls: ['./productos-hipoteca.component.css'],

})
export class ProductosHipotecaComponent implements OnInit {

  casasModelo: any[] = [];
      

  constructor(private _houseModelService: HouseModelService){

    }

ngOnInit(): void{
  this.casasModelo = this._houseModelService.getHouseModel();
}
}
