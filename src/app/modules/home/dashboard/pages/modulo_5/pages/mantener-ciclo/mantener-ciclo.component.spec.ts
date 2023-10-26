import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerCicloComponent } from './mantener-ciclo.component';

describe('MantenerCicloComponent', () => {
  let component: MantenerCicloComponent;
  let fixture: ComponentFixture<MantenerCicloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerCicloComponent]
    });
    fixture = TestBed.createComponent(MantenerCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
