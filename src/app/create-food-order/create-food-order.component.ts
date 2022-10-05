import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-food-order',
  templateUrl: './create-food-order.component.html',
  styleUrls: ['./create-food-order.component.css']
})
export class CreateFoodOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createFoodOrder(form:NgForm){

  }
}
