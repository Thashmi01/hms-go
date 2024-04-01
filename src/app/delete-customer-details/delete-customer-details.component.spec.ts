import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerDetailsComponent } from './delete-customer-details.component';

describe('DeleteCustomerDetailsComponent', () => {
  let component: DeleteCustomerDetailsComponent;
  let fixture: ComponentFixture<DeleteCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCustomerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
