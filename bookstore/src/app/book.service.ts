import { Injectable } from '@angular/core';
import { BOOKS } from './_data/books';
import { Book } from './_type/book.Interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'api/books';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application'})
  };
  constructor(private _http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this._http.get<Book[]>(this.booksUrl);
  }

  getBook(id: number): Observable<Book>{
    const url = `${this.booksUrl}/${id}`;
    return this._http.get<Book>(url);
  }

  updateBook(book: Book): Observable<any> {
    return this._http.put(this.booksUrl, book, this.httpOptions);
  }
  

  addBook(book:Book): Observable<Book> {
    return this._http.post<Book>(this.booksUrl, book, this.httpOptions);
  }

  deleteBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this._http.delete<Book>(url, this.httpOptions);
  }

  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this._http.get<Book[]>(`${this.booksUrl}/?name=${term}`)
  }
}
