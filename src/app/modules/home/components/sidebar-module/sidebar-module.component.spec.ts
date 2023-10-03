import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarModuleComponent } from './sidebar-module.component';

describe('SidebarModuleComponent', () => {
  let component: SidebarModuleComponent;
  let fixture: ComponentFixture<SidebarModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarModuleComponent]
    });
    fixture = TestBed.createComponent(SidebarModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
