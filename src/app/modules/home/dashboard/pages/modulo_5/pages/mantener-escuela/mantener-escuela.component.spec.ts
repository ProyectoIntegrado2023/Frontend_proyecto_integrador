import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerEscuelaComponent } from './mantener-escuela.component';

describe('MantenerEscuelaComponent', () => {
  let component: MantenerEscuelaComponent;
  let fixture: ComponentFixture<MantenerEscuelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerEscuelaComponent]
    });
    fixture = TestBed.createComponent(MantenerEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
