import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../_type/book.Interface';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent {
  @Output() searchValue = new EventEmitter<string>();
  books$!: any;
  

  constructor() {}

  search(term: string): void {
    this.searchValue.emit(term);
  }

  ngOnInit(): void {}
}
