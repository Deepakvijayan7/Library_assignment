import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Bookservice } from '../services/newbook.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  images:any;
  constructor( private http:HttpClient, private Bookservice:Bookservice,private router:Router) { }

  Bookss={
    Bookname:'',
    Author:'',
    Description:'',
    Bookpic:''
  }
  ngOnInit(): void {
  }

  AddBook(){
    
    this.Bookservice.newBooks(this.Bookss);
    this.router.navigate(['books']);
  }
  // imageUpload(event:any){
  //   const file=event.target.files[0];

  //   const formdata = new FormData();
  //   formdata.append('file', file);
  //   this.http.post('http://localhost:3000/file', formdata).subscribe(
  //     (d) => {
  //       console.log(d);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  //   this.http.post('http://localhost:3000/insert',formdata);
  // }
  // imageUpload(event:any){
  //   const file=event.target.files[0];
  //   if(event.target.files.length > 0){
  //     console.log(file);
  //   const formData= new FormData();
  //     formData.append('file',file);
  //   this.http.post('http://localhost:3000/file', formData).subscribe((data)=>{
  //     console.log(data);
    
  //   }
  //   }
  // }

  imageUpload(event:any){
    const file=event.target.files[0];
    const formData= new FormData(); 
    this.images=file;
    console.log(this.images);
    formData.append('file',file);
    this.http.post<any>('http://localhost:3000/file', formData).subscribe((data)=>{
    console.log(data);
    },
    (err)=>{
      console.log(err)
    })
      
  }
}
