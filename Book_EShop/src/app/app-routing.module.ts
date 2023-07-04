import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookShoppingCarComponent } from './book-shopping-car/book-shopping-car.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'prefix' },
  {path:'list',component: BookListComponent},
  {path:'shoppingcar', component: BookShoppingCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
