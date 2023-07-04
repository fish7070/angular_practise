import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookSmallShoppingCarComponent } from './book-small-shopping-car/book-small-shopping-car.component';
import { BookShoppingCarComponent } from './book-shopping-car/book-shopping-car.component';
import { BookComponentStore } from './book.component-store';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookSmallShoppingCarComponent,
    BookShoppingCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookComponentStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
