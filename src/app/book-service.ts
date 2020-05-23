import { Book } from './book';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class BookService{
    books:Array<Book>=[
        {id:101,title:'Angular Programming',author:'Steve',price:550},
        {id:102,title:'Java Programming',author:'John',price:450},
        {id:103,title:'C# Programming',author:'SAllen',price:350}

    ];

    getBook(id:number):Book{
       for(let i=0;i<this.books.length;i++){
            if(this.books[i].id==id){
                return this.books[i];
            }
       }
    }
    updateBookById(book:Book):boolean{
        let bookToUpdate=this.getBook(book.id);
        if(bookToUpdate){
            bookToUpdate.title=book.title;
            bookToUpdate.author=book.author;
            bookToUpdate.price=book.price;
            return true;
        }
        return false;
    }
    
}