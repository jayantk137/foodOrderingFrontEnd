import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-create-food-product',
  templateUrl: './create-food-product.component.html',
  styleUrls: ['./create-food-product.component.css']
})
export class CreateFoodProductComponent implements OnInit {
   user_id:any;
   menu_id:any;
   menudetails:any
  constructor(private bservice:BranchServiceService) { }

  ngOnInit(): void {
   
  }
  addFoodProduct(form:NgForm){
   // console.log(form.value);
     this.user_id=localStorage.getItem("USERID");
     this.menu_id=localStorage.getItem("MENUID");
    this.bservice.addFoodProduct(this.user_id,this.menu_id,form.value).subscribe((res)=>{
         console.log(res);
        
         
    })

  }
}
