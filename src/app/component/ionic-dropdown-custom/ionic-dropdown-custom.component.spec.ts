import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicDropdownCustomComponent } from './ionic-dropdown-custom.component';

describe('CustomSelectSmoothPopoverComponent', () => {
  let component: IonicDropdownCustomComponent;
  let fixture: ComponentFixture<IonicDropdownCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicDropdownCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonicDropdownCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
