import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit {
  branch_id:any
  user_id:any
  constructor(private bservice:BranchServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.branch_id=this.route.snapshot.params['id']
  }

  updateBranch(form:NgForm){
    this.bservice.updateBranch(form.value,this.branch_id).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl(`getAllBranch/${this.user_id}`)
      
    })

  }


}
