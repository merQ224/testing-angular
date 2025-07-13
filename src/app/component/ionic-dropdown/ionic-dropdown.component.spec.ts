import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicDropdownComponent } from './ionic-dropdown.component';

describe('IonicDropdownComponent', () => {
  let component: IonicDropdownComponent;
  let fixture: ComponentFixture<IonicDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonicDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
