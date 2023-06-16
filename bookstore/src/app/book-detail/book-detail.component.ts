import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../_type/book.Interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{

  book!: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.bookService.getBook(id);
  }

  back(): void{
    this.location.back();
  }

  save(): void {
    this.bookService.updateBook(this.book);
    this.back();
  }

  delete(id: number): void{
    this.bookService.deleteBook(id);
    this.back();
  }
}
