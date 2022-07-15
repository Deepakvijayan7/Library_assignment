import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Books= {
    _id:'',
    Bookname:'',
    Author:'',
    Description:'',
    Bookpic:'',
  }
  constructor(private booksService:BooksService, private router:Router) { }

  ngOnInit(): void {
    let _id = localStorage.getItem("editProductId");
    this.booksService.getBook(_id).subscribe((data)=>{
      this.Books=JSON.parse(JSON.stringify(data));
  })
}
  editBook()
  {    
    this.booksService.editBook(this.Books);   
    alert("Success");
    this.router.navigate(['books']);
  }
}
