import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigCoordComponent } from './asig-coord.component';

describe('AsigCoordComponent', () => {
  let component: AsigCoordComponent;
  let fixture: ComponentFixture<AsigCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsigCoordComponent]
    });
    fixture = TestBed.createComponent(AsigCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
