import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _loginUrl = "/login";
  private _loginUrl = "http://localhost:3000/login";

  constructor(private http:HttpClient, private router:Router) { }
  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn() {
    return localStorage.getItem('token');   
  }
  getToken()
  {
    // return localStorage.getItem('token')
    return localStorage.getItem('token');
  }
  logOut()
  {
    console.log("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // this.router.navigate(["login"]);
  }
}
