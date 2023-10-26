import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasComponent } from './horas.component';

describe('HorasComponent', () => {
  let component: HorasComponent;
  let fixture: ComponentFixture<HorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorasComponent]
    });
    fixture = TestBed.createComponent(HorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
