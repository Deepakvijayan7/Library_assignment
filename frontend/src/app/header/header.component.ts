import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
var user=localStorage.getItem('user'); 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title=user;

  constructor(public _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  logoutUser()
  {
  localStorage.removeItem('token')
  this._router.navigate(['login'])
  }
  loggedUser()
  {
    this._router.navigate(['/books'])
  }
}
