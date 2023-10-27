import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRolsisComponent } from './list-rolsis.component';

describe('ListRolsisComponent', () => {
  let component: ListRolsisComponent;
  let fixture: ComponentFixture<ListRolsisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRolsisComponent]
    });
    fixture = TestBed.createComponent(ListRolsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
