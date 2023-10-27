import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsigPriviComponent } from './asig-privi.component';


describe('AsigPriviComponent', () => {
  let component: AsigPriviComponent;
  let fixture: ComponentFixture<AsigPriviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsigPriviComponent]
    });
    fixture = TestBed.createComponent(AsigPriviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
