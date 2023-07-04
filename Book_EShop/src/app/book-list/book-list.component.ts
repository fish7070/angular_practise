import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookComponentStore } from '../book.component-store';
import { Subscription } from 'rxjs';
import { Book } from '../_type/book.Interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy{

  bookList?: Book[];
  bookListSuber?: Subscription;
  sub = new Subscription;
  constructor(private _bookCS: BookComponentStore){
    this._bookCS.state$.subscribe((s) => console.log(s))
  }
  
  ngOnInit(): void {
    this._bookCS.getBookList();
    this.bookListSuber = this._bookCS.bookList$.subscribe((bookList) =>{
      this.bookList = bookList;
    });
    this.sub.add(this.bookListSuber);
  }

  onCheck(event: any,book: Book){
    console.log("event === " + event.target.checked);
    if(event.target.checked){
      this._bookCS.addShoppingCarBookMapList(book);
    } else {
      this._bookCS.removeShoppingCarBookMapList(book);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
