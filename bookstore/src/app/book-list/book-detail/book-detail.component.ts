import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../_type/book.Interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent{

  @Input() book!: Book;
  @Output() saveChange = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  constructor() {}

  onSave(): void {
    console.log("save")
    this.saveChange.emit();
  }

  onDelete() {
    console.log("delete")
    this.delete.emit();
  }
}
