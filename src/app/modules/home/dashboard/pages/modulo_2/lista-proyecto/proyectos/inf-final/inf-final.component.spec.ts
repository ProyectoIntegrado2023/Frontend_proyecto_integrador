import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfFinalComponent } from './inf-final.component';

describe('InfFinalComponent', () => {
  let component: InfFinalComponent;
  let fixture: ComponentFixture<InfFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfFinalComponent]
    });
    fixture = TestBed.createComponent(InfFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
