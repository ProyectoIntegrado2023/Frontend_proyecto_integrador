import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviDespleComponent } from './privi-desple.component';

describe('PriviDespleComponent', () => {
  let component: PriviDespleComponent;
  let fixture: ComponentFixture<PriviDespleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriviDespleComponent]
    });
    fixture = TestBed.createComponent(PriviDespleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
