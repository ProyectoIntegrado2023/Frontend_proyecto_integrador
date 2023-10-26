import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerCursoArticuladoComponent } from './mantener-curso-articulado.component';

describe('MantenerCursoArticuladoComponent', () => {
  let component: MantenerCursoArticuladoComponent;
  let fixture: ComponentFixture<MantenerCursoArticuladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerCursoArticuladoComponent]
    });
    fixture = TestBed.createComponent(MantenerCursoArticuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
