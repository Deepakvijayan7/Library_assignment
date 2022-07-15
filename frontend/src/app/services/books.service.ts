import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient) { }
  getBook(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:3000/bookss");
  }

  // newProduct(item:any)
  // {   
  //   return this.http.post("http://localhost:3000/insert",{"product":item})
  //   .subscribe(data =>{console.log(data)})
  // }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editBook(id:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",id)
    .subscribe(data =>{console.log(data)})
  }
}
