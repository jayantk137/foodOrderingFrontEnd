import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any
  constructor(private logn:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    
    this.logn.login(form.value).subscribe((res)=>{
      console.log(res);
      
      this.data=res;

     console.log(this.data.token);

     localStorage.setItem('token',this.data.token);

     localStorage.setItem('role',this.data.role);
     localStorage.setItem('user_id',this.data.user_id);

     if(this.data.role=='admin'){
      this.router.navigateByUrl(`getAllBranch/${this.data.user_id}`)
     }
     else if(this.data.role=='BranchManager'){
      this.router.navigateByUrl('createMenu')
     }
     else if(this.data.role=='staff'){
      this.router.navigateByUrl('getfoodorder')
     }
      
    })
  }


}
