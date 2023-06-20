import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-manage/books-list/book-detail/book-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookManageComponent } from './book-manage/book-manage.component';

const routes: Routes = [
  {path:'', component: BookManageComponent},
  {path:'bookmanage', component: BookManageComponent},
  {path:'addbook', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
