import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-get-food-product',
  templateUrl: './get-food-product.component.html',
  styleUrls: ['./get-food-product.component.css']
})
export class GetFoodProductComponent implements OnInit {
  result:any
  menu_id:any
  routeSub: any;
  constructor(private bservice:BranchServiceService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.menu_id=this.route.snapshot.params['id'];
    this.bservice.getFoodProduct(this.menu_id).subscribe((res)=>{
     this.result=res
    console.log(res);
    })
  }
   deleteProduct(id:any){
     this.menu_id=localStorage.getItem('MENUID');
     this.bservice.deleteFoodProduct(this.menu_id,id).subscribe((res)=>{
      console.log(res);
      console.log(this.menu_id);
      
      this.router.navigateByUrl(`getFoodProducts/${this.menu_id}`)
      this.bservice.getFoodProduct(this.menu_id).subscribe((res)=>{
          // this is reflecting list of items
          // wait i check api
          this.result=res
            console.log(res);
            
      })
  
   //   alert('Your FoodProduct Deleted Succesfully')

      
     })
   }
  

 
   


}
