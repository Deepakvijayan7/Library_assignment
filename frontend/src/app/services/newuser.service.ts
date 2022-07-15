import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewuserService {

  constructor( private http:HttpClient) { }

  // Register_user(user:any){
  //   // this.http.post('http://localhost:3000/newuser',user).subscribe(res=>{
  //   //     console.log(res)
  //   //   })
  //   return this.http.post("http://localhost:3000/register",{"Users":user})
  //   .subscribe(data =>{console.log(data)})
  // }
  signUp(user:any)
  {   
    console.log(user);
    return this.http.post<any>("http://localhost:3000/register",{"Users":user})
  }

  
}
