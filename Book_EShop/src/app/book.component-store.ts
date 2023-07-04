import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Book } from './_type/book.Interface';
import { Observable, mergeMap, of, tap } from 'rxjs';
import { BOOKS } from './_data/books';

interface BookState {
  bookList: Record<string, Book>;
  shoppingCarBookMapList: Record<string, Book>;
}

const initState: BookState = {
  bookList: {},
  shoppingCarBookMapList: {},
};

@Injectable({
  providedIn: 'root',
})
export class BookComponentStore extends ComponentStore<BookState> {
  constructor() {
    super(initState);
  }

  // =============== select ===============

  readonly bookList$ = this.select((state)=> Object.values(state.bookList));
  readonly shoppingCarBookMapList$ = this.select((state)=> Object.values(state.shoppingCarBookMapList));

  // =============== select ===============



  // =============== updater ===============

  readonly setBookList = this.updater((state, bookList: Book[]) => {
    const currentBookList = state.bookList;
    bookList.map((book) =>{
      currentBookList[book.id] = book;
    })
    return {...state, bookList: currentBookList}
  })

  readonly addShoppingCarBookMapList = this.updater((state, book:Book)=>{
    const currentShoppingCarBookMapList = state.shoppingCarBookMapList;
    const id = book.id
    currentShoppingCarBookMapList[id] = book;

    return{...state, shoppingCarBookMapList: currentShoppingCarBookMapList}
  })

  readonly removeShoppingCarBookMapList = this.updater((state, book:Book)=>{
    const currentShoppingCarBookMapList = state.shoppingCarBookMapList;
    const id = book.id
    delete currentShoppingCarBookMapList[id];
    return{...state, shoppingCarBookMapList: currentShoppingCarBookMapList}
  })

  // =============== updater ===============


  // =============== effect ===============

  readonly getBookList = this.effect((void$: Observable<void>)=>{
    return void$.pipe(
      tap(()=>{
        this.setBookList(BOOKS);
      })
    )
  })

  // =============== effect ===============
}
