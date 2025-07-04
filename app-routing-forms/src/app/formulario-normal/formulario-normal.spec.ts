import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNormal } from './formulario-normal';

describe('FormularioNormal', () => {
  let component: FormularioNormal;
  let fixture: ComponentFixture<FormularioNormal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioNormal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNormal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
