import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodProductComponent } from './delete-food-product.component';

describe('DeleteFoodProductComponent', () => {
  let component: DeleteFoodProductComponent;
  let fixture: ComponentFixture<DeleteFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
