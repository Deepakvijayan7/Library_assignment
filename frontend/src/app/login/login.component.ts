import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username:'',
    password:''
  }
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  
  loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user',res.username);
        this._router.navigate(['/books'])
      }
    ) 
  }
}
