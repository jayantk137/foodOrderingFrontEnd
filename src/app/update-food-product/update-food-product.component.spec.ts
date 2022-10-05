import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoodProductComponent } from './update-food-product.component';

describe('UpdateFoodProductComponent', () => {
  let component: UpdateFoodProductComponent;
  let fixture: ComponentFixture<UpdateFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
