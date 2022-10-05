import { Component, OnInit } from '@angular/core';
import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-delete-food-product',
  templateUrl: './delete-food-product.component.html',
  styleUrls: ['./delete-food-product.component.css']
})
export class DeleteFoodProductComponent implements OnInit {

  constructor(private bservice:BranchServiceService) { }

  ngOnInit(): void {
  }
  
}
