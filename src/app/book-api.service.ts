import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private bookApi:HttpClient) { }

  baseUrl="http://localhost:8000/api/books";

  addBook(book:Book):Observable<Book>{
      return this.bookApi.post<Book>(this.baseUrl,book);
  }

  updateBook(book:Book):Observable<Book>{
    return this.bookApi.put<Book>(this.baseUrl,book);
}

  getAllBook():Observable<Array<Book>>{
    return this.bookApi.get<Array<Book>>("http://localhost:8000/api/books");
  }

  getBookById(id:number):Observable<Book>{
    return this.bookApi.get<Book>("http://localhost:8000/api/books/"+id);
  }
  deleteBookById(id:number):Observable<any>{
   return this.bookApi.delete<any>("http://localhost:8000/api/books/"+id);
  }




}
