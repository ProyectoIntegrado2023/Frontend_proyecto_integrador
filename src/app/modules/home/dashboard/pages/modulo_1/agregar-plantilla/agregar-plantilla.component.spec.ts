import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlantillaComponent } from './agregar-plantilla.component';

describe('AgregarPlantillaComponent', () => {
  let component: AgregarPlantillaComponent;
  let fixture: ComponentFixture<AgregarPlantillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPlantillaComponent]
    });
    fixture = TestBed.createComponent(AgregarPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
