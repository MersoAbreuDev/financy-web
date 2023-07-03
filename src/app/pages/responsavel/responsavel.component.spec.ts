import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsavelComponent } from './responsavel.component';

describe('ResponsavelComponent', () => {
  let component: ResponsavelComponent;
  let fixture: ComponentFixture<ResponsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsavelComponent]
    });
    fixture = TestBed.createComponent(ResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
