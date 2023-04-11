import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserprofileComponent } from './admin-userprofile.component';

describe('AdminUserprofileComponent', () => {
  let component: AdminUserprofileComponent;
  let fixture: ComponentFixture<AdminUserprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
