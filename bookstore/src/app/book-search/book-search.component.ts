import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../_type/book.Interface';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {

  books$!: Observable<Book[]>;
  private searchTerms = new Subject<string>();
  constructor(private _bookService: BookService){}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.books$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._bookService.searchBooks(term)),
    );
  }
}
