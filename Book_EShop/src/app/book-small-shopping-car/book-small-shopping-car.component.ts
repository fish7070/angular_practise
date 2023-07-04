import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookComponentStore } from '../book.component-store';
import { Book } from '../_type/book.Interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-small-shopping-car',
  templateUrl: './book-small-shopping-car.component.html',
  styleUrls: ['./book-small-shopping-car.component.css']
})
export class BookSmallShoppingCarComponent implements OnInit , OnDestroy{

  smallShoppingCarList?: Book[];
  smallShoppingCarListSuber?: Subscription;
  sub = new Subscription();

  constructor(private _bookCS: BookComponentStore){}
  ngOnInit(): void {
    this.smallShoppingCarListSuber = this._bookCS.shoppingCarBookMapList$.subscribe(
      (shoppingCarBookMapList) =>
        (this.smallShoppingCarList = shoppingCarBookMapList)
    );
    this.sub.add(this.smallShoppingCarListSuber);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
