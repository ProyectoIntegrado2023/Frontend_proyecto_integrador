import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropAreaComponent } from './drop-area.component';

describe('DropAreaComponent', () => {
  let component: DropAreaComponent;
  let fixture: ComponentFixture<DropAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropAreaComponent]
    });
    fixture = TestBed.createComponent(DropAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
