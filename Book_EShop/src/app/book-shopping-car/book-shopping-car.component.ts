import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookComponentStore } from '../book.component-store';
import { Book } from '../_type/book.Interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-shopping-car',
  templateUrl: './book-shopping-car.component.html',
  styleUrls: ['./book-shopping-car.component.css'],
})
export class BookShoppingCarComponent implements OnInit, OnDestroy {
  shoppingCarList?: Book[];
  shoppingCarListSuber?: Subscription;
  sub = new Subscription();

  constructor(
    private _bookCS: BookComponentStore,
    private _router: Router,
    ) {}
  ngOnInit(): void {
    this.shoppingCarListSuber = this._bookCS.shoppingCarBookMapList$.subscribe(
      (shoppingCarBookMapList) =>
        (this.shoppingCarList = shoppingCarBookMapList)
    );
    this.sub.add(this.shoppingCarListSuber);
  }

  golist(){
    this._router.navigate(['/list']);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
