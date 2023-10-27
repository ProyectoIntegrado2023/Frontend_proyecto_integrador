import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigHorasComponent } from './asig-horas.component';

describe('AsigHorasComponent', () => {
  let component: AsigHorasComponent;
  let fixture: ComponentFixture<AsigHorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsigHorasComponent]
    });
    fixture = TestBed.createComponent(AsigHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
