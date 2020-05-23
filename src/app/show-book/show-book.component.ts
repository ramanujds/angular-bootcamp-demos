import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  constructor(public bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    
  }

  updateBook(id:number){
    this.router.navigate(['update-book/'+id]);

  }

}
