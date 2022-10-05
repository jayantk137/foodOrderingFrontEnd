import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBranchComponent } from './get-all-branch.component';

describe('GetAllBranchComponent', () => {
  let component: GetAllBranchComponent;
  let fixture: ComponentFixture<GetAllBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
