import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasDetallesComponent } from './horas-detalles.component';

describe('HorasDetallesComponent', () => {
  let component: HorasDetallesComponent;
  let fixture: ComponentFixture<HorasDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorasDetallesComponent]
    });
    fixture = TestBed.createComponent(HorasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
