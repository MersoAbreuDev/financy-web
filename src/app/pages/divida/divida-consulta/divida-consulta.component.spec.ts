import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaConsultaComponent } from './divida-consulta.component';

describe('DividaConsultaComponent', () => {
  let component: DividaConsultaComponent;
  let fixture: ComponentFixture<DividaConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividaConsultaComponent]
    });
    fixture = TestBed.createComponent(DividaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
