import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../_type/book.Interface';
import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css']
})
export class BookManageComponent implements OnInit ,OnDestroy{
  books$!: any;
  booksDelete$!: any;
  books!: Book[];
  searchbooks!: Book[];
  selectedBookId!: number[];
  deleteCompleted$ = new Subject<void>();
  private _searchTerms = new Subject<string>();

  constructor(private _bookService: BookService ){}


  ngOnInit(): void {
    this.getBooks();
    this._searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._bookService.searchBooks(term)),
    ).subscribe(books => this.books = books);
  }

  getBooks(): void{
    this.books$ = this._bookService.getBooks().subscribe(book => this.books = book);
  }

  getSelectedBooks(booksId: number[]):void{
    console.log(booksId);
    this.selectedBookId = booksId;
  }

  deleteSelectedBooks(): void{
    console.log(this.selectedBookId);
    this._bookService.deleteBooks(this.selectedBookId).subscribe(() => {
      this.getBooks();
      this.deleteCompleted$.next();
      this.selectedBookId = [];
    });
  }

  updateBookdetail(book: Book): void{
    console.log("updateRequst")
    this._bookService.updateBook(book!).subscribe(() => {
      this.getBooks();
    });
  }

  searchBook(term: string){
    this._searchTerms.next(term);
  }

  ngOnDestroy(): void {
    this.books$.unsubscribe();
  }
}
