import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredorConsultaComponent } from './credor-consulta.component';

describe('CredorConsultaComponent', () => {
  let component: CredorConsultaComponent;
  let fixture: ComponentFixture<CredorConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CredorConsultaComponent]
    });
    fixture = TestBed.createComponent(CredorConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
