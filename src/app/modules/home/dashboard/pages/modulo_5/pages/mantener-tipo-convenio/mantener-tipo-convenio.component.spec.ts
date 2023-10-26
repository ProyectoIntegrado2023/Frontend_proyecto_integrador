import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerTipoConvenioComponent } from './mantener-tipo-convenio.component';

describe('MantenerTipoConvenioComponent', () => {
  let component: MantenerTipoConvenioComponent;
  let fixture: ComponentFixture<MantenerTipoConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenerTipoConvenioComponent]
    });
    fixture = TestBed.createComponent(MantenerTipoConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
