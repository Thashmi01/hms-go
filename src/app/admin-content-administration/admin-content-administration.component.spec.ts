import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentAdministrationComponent } from './admin-content-administration.component';

describe('AdminContentAdministrationComponent', () => {
  let component: AdminContentAdministrationComponent;
  let fixture: ComponentFixture<AdminContentAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminContentAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminContentAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
