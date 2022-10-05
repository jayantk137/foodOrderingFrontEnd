import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchServiceService } from '../Services/branch-service.service';
import { MatDialog } from '@angular/material/dialog'
import { timeStamp } from 'console';
import { CreatebanchComponent } from '../createbanch/createbanch.component';

@Component({
  selector: 'app-get-all-branch',
  templateUrl: './get-all-branch.component.html',
  styleUrls: ['./get-all-branch.component.css']
})
export class GetAllBranchComponent implements OnInit {
  result:any
  user_id:any
  routeSub: any;
  constructor(private bservice:BranchServiceService,private route:ActivatedRoute,private router:Router,private dialogRef:MatDialog) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')
    this.bservice.getAllBranch(this.user_id).subscribe((res)=>{
      this.result=res;
      console.log(res);
      
    })

  
  }

  deleteBranch(branch_id:any){
    this.bservice.deleteBranch(branch_id,this.user_id).subscribe((res)=>{
      this.result=res;
      this.router.navigateByUrl(`getAllBranch/${this.user_id}`)
    })
  }

  gotobranch(){
    //this.router.navigateByUrl(`addBranch/${this.user_id}`)
    this.dialogRef.open(CreatebanchComponent);
  }


}


