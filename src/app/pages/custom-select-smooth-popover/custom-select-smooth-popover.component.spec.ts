import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectSmoothPopoverComponent } from './custom-select-smooth-popover.component';

describe('CustomSelectSmoothPopoverComponent', () => {
  let component: CustomSelectSmoothPopoverComponent;
  let fixture: ComponentFixture<CustomSelectSmoothPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSelectSmoothPopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSelectSmoothPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
