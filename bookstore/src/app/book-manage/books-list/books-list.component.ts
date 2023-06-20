import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/_type/book.Interface';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  @Input() books!: Book[];
  @Input() deleteCompleted: any;
  @Output() selectBooks = new EventEmitter<number[]>();
  @Output() changeDetail = new EventEmitter<Book>();
  selectedBookIds: number[] = [];
  deleteSubscription: any;
  selectedBook?: Book;

  constructor(){}

  ngOnInit(): void {
    this.deleteSubscription = this.deleteCompleted.subscribe(() => {
      this.selectedBookIds = [];
    });
  }

  updateSelectedBooks(index: number, event: any) {
    const bookId = this.books[index].id;
    if (event.target.checked) {
      this.selectedBookIds.push(bookId);
    } else {
      const idIndex = this.selectedBookIds.indexOf(bookId);
      if (idIndex > -1) {
        this.selectedBookIds.splice(idIndex, 1);
      }
    }

    this.selectBooks.emit(this.selectedBookIds);
  }

  deleteCompletedHandler(): void {
    this.selectedBookIds = [];
  }

  selectBook(book: Book): void {
    this.selectedBook = book;
  }

  onChangeDetail(book: Book): void {
    console.log("CD")
    this.changeDetail.emit(book);
    this.selectedBook = undefined;
  }
  onChangeCancel(): void {
    this.selectedBook = undefined;
  }

  ngOnDestroy(): void {
    this.deleteSubscription.unsubscribe();
  }
}
