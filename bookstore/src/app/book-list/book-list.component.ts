import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../_type/book.Interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books!: Book[];

  constructor(private _bookService: BookService ){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.books = this._bookService.getBooks();
  }


}
