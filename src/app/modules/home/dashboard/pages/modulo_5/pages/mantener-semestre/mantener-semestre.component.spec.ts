import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerSemestreComponent } from './mantener-semestre.component';

describe('MantenerSemestreComponent', () => {
  let component: MantenerSemestreComponent;
  let fixture: ComponentFixture<MantenerSemestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerSemestreComponent]
    });
    fixture = TestBed.createComponent(MantenerSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
