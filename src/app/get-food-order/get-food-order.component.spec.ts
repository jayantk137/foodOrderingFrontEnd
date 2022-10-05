import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFoodOrderComponent } from './get-food-order.component';

describe('GetFoodOrderComponent', () => {
  let component: GetFoodOrderComponent;
  let fixture: ComponentFixture<GetFoodOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFoodOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFoodOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
