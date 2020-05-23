import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-service';

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
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (param) => {
        let id = param['id'];
        this.book = this.bookService.getBook(id);
        this.id=this.book.id;
        this.author=this.book.author;
        this.title=this.book.title;
        this.price=this.book.price
        console.log(this.book);

      }
    )

  }

  updateBook(book: Book) {
    if (this.bookService.updateBookById(book)) {
      alert('Updated Successfully');
    }
    else {
      alert('Book not found');
    }
  }
}
