import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadEjeComponent } from './actividad-eje.component';

describe('ActividadEjeComponent', () => {
  let component: ActividadEjeComponent;
  let fixture: ComponentFixture<ActividadEjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadEjeComponent]
    });
    fixture = TestBed.createComponent(ActividadEjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
