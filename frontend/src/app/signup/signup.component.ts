import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewuserService } from '../services/newuser.service'; 
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfirmPasswordValidator } from './confirmedvalidator'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router, private signup: FormBuilder, private _signup: NewuserService) {}
  

  signupForm = this.signup.group({
    username: ["", Validators.required],
    lname: ["",Validators.required],
    email: ["",[Validators.required, Validators.pattern("^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$")]],
    password: ["",[Validators.required,Validators.minLength(8),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$")]],
    repassword:["",[Validators.required]]

  },
  {
    validator: ConfirmPasswordValidator("password", "repassword")
  });


  ngOnInit(): void {
  }
  signUp()
  {    
    console.log("Service Called");    
    const username = this.signupForm.controls['username'].value;
    const email = this.signupForm.controls['email'].value;
    const password = this.signupForm.controls['password'].value;

    this._signup.signUp({username,email,password})
    .subscribe((data) => {
      console.log("signup subscribe");
      
        let status = data.status;
        console.log("status="+status);
        if(!status)
        {
          alert("User already exists");
          this.router.navigate(["/signup"]);
        }
        else{
          this.router.navigate(["/login"]);
        }
    })
    alert("Sign up success..");
    this.router.navigate(['login']);

  }
}
