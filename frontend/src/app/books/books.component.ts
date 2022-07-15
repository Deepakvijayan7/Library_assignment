import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

declare var show_delete_box: any;
declare var hide_delete_box: any;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  show_delete_box(id:any){
 new show_delete_box(id);
  }
  hide_delete_box(id:any){
 new hide_delete_box(id);
  }
  Books= [{
    _id:'',
    Bookname:'',
    Author:'',
    Description:'',
    Bookpic:''
  }]
  constructor(private bookservice:BooksService , private router:Router) { }

  ngOnInit(): void{
    this.bookservice.getBooks().subscribe((data)=>{
      this.Books=JSON.parse(JSON.stringify(data));
  })
  }
 
  editBook(book:any)
  {
    localStorage.setItem("editProductId", book._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.bookservice.deleteBook(book._id)
      .subscribe((data) => {
        this.Books = this.Books.filter(p => p !== book);
      })
  }
  
}
