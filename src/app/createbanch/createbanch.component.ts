import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-createbanch',
  templateUrl: './createbanch.component.html',
  styleUrls: ['./createbanch.component.css']
})
export class CreatebanchComponent implements OnInit {

  user_id:any
  constructor(private bservice:BranchServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user_id=localStorage.getItem('user_id')
  }

  addBranch(form:NgForm){
    this.bservice.addBranch(form.value,this.user_id).subscribe((res)=>{
         console.log(res);
    })
  }

}
