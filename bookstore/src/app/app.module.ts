import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-manage/books-list/book-detail/book-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { BookSearchComponent } from './book-manage/book-search/book-search.component';
import { InMemoryDataService } from './_data/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { BookManageComponent } from './book-manage/book-manage.component';
import { BooksListComponent } from './book-manage/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookSearchComponent,
    AddBookComponent,
    BookManageComponent,
    BooksListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
