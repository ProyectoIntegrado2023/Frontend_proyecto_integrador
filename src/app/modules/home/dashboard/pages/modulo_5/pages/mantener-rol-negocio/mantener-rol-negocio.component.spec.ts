import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerRolNegocioComponent } from './mantener-rol-negocio.component';

describe('MantenerRolNegocioComponent', () => {
  let component: MantenerRolNegocioComponent;
  let fixture: ComponentFixture<MantenerRolNegocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerRolNegocioComponent]
    });
    fixture = TestBed.createComponent(MantenerRolNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
