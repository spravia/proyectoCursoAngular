import { Component } from '@angular/core';
import { ProductosHipotecaComponent } from './productos-hipoteca.component';
import { HouseModelService } from './houseMode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HouseModelService]
})
export class AppComponent {
  title = 'Gestor Bancario';
  Home: string = 'Home';
  productosHipoteca: string = 'Productos de Hipoteca';
  soliciteCredito: string = 'Solicite su Crédito';
  contacto: string = 'Contacto';
}
