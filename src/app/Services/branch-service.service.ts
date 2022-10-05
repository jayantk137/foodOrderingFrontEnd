import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BranchServiceService {
  token = localStorage.getItem('token')

  constructor(private http:HttpClient) { }

  //creating menu
  createMenu(user_id:any,menu:any){
    return this.http.post(`http://localhost:8080/createMenu/${user_id}`,menu)
  }
  addFoodProduct(user_id:any,menu_id:any,foodproduct:any){
    return this.http.post(`http://localhost:8080/createProduct/${user_id}/${menu_id}`,foodproduct)
  }
  getFoodProduct(menu_id:any){
    return this.http.get(`http://localhost:8080/getproductList/${menu_id}`)
  }

  updateFoodProduct(foodproduct_id:any,foodproduct:any){
    return this.http.put(`http://localhost:8080/updateproduct/${foodproduct_id}`,foodproduct)
  }
  deleteFoodProduct(menu_id:any,foodproduct_id:any){
    return this.http.delete(`http://localhost:8080/deleteproduct/${foodproduct_id}/${menu_id}`)
  }


  addBranch(branch:any , user_id:any){
    return this.http.post(`http://localhost:8080/branch/${user_id}`,branch,
    {
      headers:new HttpHeaders({
        'Authorization':`${this.token}`
      })
    })
  }

  getAllBranch(user_id:any){
    return this.http.get(`http://localhost:8080/getallbranch/${user_id}`)
  }

  updateBranch(branch:any,branch_id:any){
    return this.http.put(`http://localhost:8080/updatebranch/${branch_id}`,branch)
  }

  deleteBranch(branch_id:any,user_id:any){
    return this.http.delete(`http://localhost:8080/deletebranch/${branch_id}/${user_id}`)
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
