import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerFacultadComponent } from './mantener-facultad.component';

describe('MantenerFacultadComponent', () => {
  let component: MantenerFacultadComponent;
  let fixture: ComponentFixture<MantenerFacultadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerFacultadComponent]
    });
    fixture = TestBed.createComponent(MantenerFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
