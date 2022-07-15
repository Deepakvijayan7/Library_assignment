import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Bookservice {
  constructor(private http:HttpClient) { }

  newBooks(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"Books":item})
    .subscribe(data =>{console.log(data)})
  }
  getBooks(id:any){
    return this.http.get(""+id);
  }
  getBookss(){
    return this.http.get("http://localhost:3000/bookss");
  }
}
