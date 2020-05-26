import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-service';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book;
  id;
  title;
  author;
  price;
  constructor(private route: ActivatedRoute, private bookService: BookApiService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (param) => {
        let id = param['id'];
        this.bookService.getBookById(id).subscribe(
        (response)=>{
          this.book=response;
        this.id=this.book.id;
        this.author=this.book.author;
        this.title=this.book.title;
        this.price=this.book.price
        console.log(this.book);
        }
        )

      }
    )

  }

  updateBook(book: Book) {
    this.bookService.updateBook(book).subscribe(response=> {
      alert('Updated Successfully');
    },
    err=>{
      alert('Book not found');
    }
    )
}
}
