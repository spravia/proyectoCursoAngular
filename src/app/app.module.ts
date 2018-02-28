import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { ProductosHipotecaComponent } from './productos-hipoteca.component';
import { IModelHouse } from './modelHouses';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosHipotecaComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{ path: 'products', component: ProductListComponent },
      //{ path: 'products/:id', component: ProductDetailComponent },
      { path: 'Home', component: HomeComponent },
      { path: 'productosHipoteca', component: ProductosHipotecaComponent },
      { path: ' ', redirectTo: 'Home', pathMatch: 'full' },
      { path: '**', redirectTo: 'Home', pathMatch: 'full' }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
