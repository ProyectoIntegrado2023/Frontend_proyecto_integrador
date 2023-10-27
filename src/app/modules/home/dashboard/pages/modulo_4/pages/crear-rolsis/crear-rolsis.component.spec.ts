import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRolsisComponent } from './crear-rolsis.component';

describe('CrearRolsisComponent', () => {
  let component: CrearRolsisComponent;
  let fixture: ComponentFixture<CrearRolsisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearRolsisComponent]
    });
    fixture = TestBed.createComponent(CrearRolsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
