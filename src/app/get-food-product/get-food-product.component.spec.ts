import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFoodProductComponent } from './get-food-product.component';

describe('GetFoodProductComponent', () => {
  let component: GetFoodProductComponent;
  let fixture: ComponentFixture<GetFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
