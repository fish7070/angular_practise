import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from '../_type/book.Interface';
import { BookService } from '../book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _bookService: BookService,
    private _location: Location,
    ) {}

  ngOnInit(): void {
      this.bookForm = this._formBuilder.group({
      title: '',
      author: '',
      publishDate: '',
    });
  }

  goback(){
    this._location.back();
  }

  onSubmit() {
    const newBook: Book = this.bookForm.value;
    this._bookService.addBook(newBook).subscribe();
    this.goback();
    console.log("submit");
  }
}
