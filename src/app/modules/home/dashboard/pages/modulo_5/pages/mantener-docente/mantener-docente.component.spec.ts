import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerDocenteComponent } from './mantener-docente.component';

describe('MantenerDocenteComponent', () => {
  let component: MantenerDocenteComponent;
  let fixture: ComponentFixture<MantenerDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerDocenteComponent]
    });
    fixture = TestBed.createComponent(MantenerDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
