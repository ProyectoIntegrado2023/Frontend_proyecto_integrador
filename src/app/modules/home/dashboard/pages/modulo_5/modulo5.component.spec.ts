import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo5Component } from './modulo5.component';

describe('Modulo5Component', () => {
  let component: Modulo5Component;
  let fixture: ComponentFixture<Modulo5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo5Component]
    });
    fixture = TestBed.createComponent(Modulo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
