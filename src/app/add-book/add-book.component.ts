import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book-service';
import { Router } from '@angular/router';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book:Book;

  
  constructor(private bookService:BookApiService, private router:Router) { }

  ngOnInit(): void {
    this.book=new Book();
    

  }

  addBook(f){
    console.log(f.value);
    this.bookService.addBook(f.value).subscribe(
      response=>{
          alert("Added Successfully")
      },
      error=>{
        console.log(error);
      }

    )
    //this.router.navigate(['/show-all']);
    
  }

}
