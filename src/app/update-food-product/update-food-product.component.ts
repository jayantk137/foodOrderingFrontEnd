import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-update-food-product',
  templateUrl: './update-food-product.component.html',
  styleUrls: ['./update-food-product.component.css']
})
export class UpdateFoodProductComponent implements OnInit {
  foodProdutid:any
  constructor(private bservice:BranchServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.foodProdutid=this.route.snapshot.params['id']
  }
  updateFoodProduct(form:NgForm){
    this.bservice.updateFoodProduct(this.foodProdutid,form.value).subscribe((res)=>{
          alert("FoodProduct Updated Successfully")
          console.log(res);
          
    })
      
  }
}
