import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebanchComponent } from './createbanch.component';

describe('CreatebanchComponent', () => {
  let component: CreatebanchComponent;
  let fixture: ComponentFixture<CreatebanchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebanchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
