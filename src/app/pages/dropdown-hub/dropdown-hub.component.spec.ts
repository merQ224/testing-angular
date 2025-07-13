import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownHubComponent } from './dropdown-hub.component';

describe('DropdownHubComponent', () => {
  let component: DropdownHubComponent;
  let fixture: ComponentFixture<DropdownHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
