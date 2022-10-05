import { Component, OnInit } from '@angular/core';
import { BranchServiceService } from '../Services/branch-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})

export class CreateMenuComponent implements OnInit {
  

   menu:any;
   data:any;
   user_id:any
  constructor(private bservice:BranchServiceService) { }

  ngOnInit(): void {
    
  }
 
   addMenu(form:NgForm){
     this.user_id=localStorage.getItem('user_id')
     this.bservice.createMenu(this.user_id,form.value).subscribe((res)=>{

       
        console.log(res);
        this.data=res;
        console.log(this.data.id);
        console.log(this.data.user.id);

        localStorage.setItem('MENUID',this.data.id);

        localStorage.setItem('USERID',this.data.user.id);        
  
        
     })
   
     
   }
  
   
}
