import { Injectable } from '@angular/core';
import { BOOKS } from './_data/books';
import { Book } from './_type/book.Interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = BOOKS;

  constructor() { }

  getBooks(): Book[]{
    return this.books;
  }

  getBook(id: number): Book{
    return this.books.find(book => book.id === id)!;
  }

  updateBook(book: Book): void {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index > -1) {
      this.books.splice(index, 1, book);
    }
  }
  

  addBook(book:Book): void {
    this.books.push(book);
  }

  deleteBook(id: number): void {
    const index = this.books.findIndex(b => b.id === id);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }
    term = term.toLowerCase();
    return of(this.books.filter(book => book.title.toLowerCase().includes(term) || book.author.toLowerCase().includes(term)));
  }
}
