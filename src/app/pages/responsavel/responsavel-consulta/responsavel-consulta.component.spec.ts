import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsavelConsultaComponent } from './responsavel-consulta.component';

describe('ResponsavelConsultaComponent', () => {
  let component: ResponsavelConsultaComponent;
  let fixture: ComponentFixture<ResponsavelConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsavelConsultaComponent]
    });
    fixture = TestBed.createComponent(ResponsavelConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
