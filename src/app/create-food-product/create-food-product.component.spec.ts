import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodProductComponent } from './create-food-product.component';

describe('CreateFoodProductComponent', () => {
  let component: CreateFoodProductComponent;
  let fixture: ComponentFixture<CreateFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
