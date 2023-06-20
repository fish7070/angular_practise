import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../_type/book.Interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books$!: Observable<Book[]>;
  selectedBook?: Book;

  constructor(private _bookService: BookService ){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.books$ = this._bookService.getBooks();
  }

  selectBook(book: Book): void {
    this.selectedBook = book;
  }

  onChangeDetail(): void {
    console.log("CD")
    this._bookService.updateBook(this.selectedBook!).subscribe();
    this.selectedBook = undefined;
  }

  onDeleteDetail(): void {
    console.log("DD")
    this._bookService.deleteBook(this.selectedBook!.id).subscribe();
    this.selectedBook = undefined;
  }
}
