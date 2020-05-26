import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  books:Array<Book>;
  constructor(private bookService:BookApiService,private router:Router) { }

  ngOnInit(): void {
  

    this.bookService.getAllBook().subscribe(
      response=>{
        this.books=response;
      }
    )

    
  }

  updateBook(id:number){
    this.router.navigate(['update-book/'+id]);

  }

  deleteBook(id:number){
    this.bookService.deleteBookById(id).subscribe(
      response=>{
        alert("Deleted Successfully");
        this.bookService.getAllBook().subscribe(
          response=>{
            this.books=response;
          }
        )
      },
      err=>{
        alert("Deletion Failed");
      }
    )  }


}
