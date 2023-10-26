import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerUsuarioComponent } from './mantener-usuario.component';

describe('MantenerUsuarioComponent', () => {
  let component: MantenerUsuarioComponent;
  let fixture: ComponentFixture<MantenerUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerUsuarioComponent]
    });
    fixture = TestBed.createComponent(MantenerUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
