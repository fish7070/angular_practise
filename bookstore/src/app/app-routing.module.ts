import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {path:'books', component: BookListComponent },
  {path:'bookdetail/:id', component: BookDetailComponent},
  {path:'addbook', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
