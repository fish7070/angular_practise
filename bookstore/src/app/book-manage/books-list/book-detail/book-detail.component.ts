import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../_type/book.Interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent{

  @Input() book?: Book;
  @Output() saveChange = new EventEmitter<Book>();
  @Output() cancel = new EventEmitter<void>();
  constructor() {}

  onSave(bookdetail: NgForm): void {
    console.log("save");
    
    const changeBook: Book = bookdetail.value;
    this.saveChange.emit(changeBook);
  }

  onCancel() {
    console.log("Cancel")
    this.cancel.emit();
  }
}
