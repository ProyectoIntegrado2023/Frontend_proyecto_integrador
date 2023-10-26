import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerEstadoComponent } from './mantener-estado.component';

describe('MantenerEstadoComponent', () => {
  let component: MantenerEstadoComponent;
  let fixture: ComponentFixture<MantenerEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerEstadoComponent]
    });
    fixture = TestBed.createComponent(MantenerEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
