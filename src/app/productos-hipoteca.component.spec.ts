import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosHipotecaComponent } from './productos-hipoteca.component';

describe('ProductosHipotecaComponent', () => {
  let component: ProductosHipotecaComponent;
  let fixture: ComponentFixture<ProductosHipotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosHipotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
