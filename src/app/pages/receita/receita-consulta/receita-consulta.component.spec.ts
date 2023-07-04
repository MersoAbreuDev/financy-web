import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaConsultaComponent } from './receita-consulta.component';

describe('ReceitaConsultaComponent', () => {
  let component: ReceitaConsultaComponent;
  let fixture: ComponentFixture<ReceitaConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaConsultaComponent]
    });
    fixture = TestBed.createComponent(ReceitaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
