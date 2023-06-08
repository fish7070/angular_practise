import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovielistComponent } from './movielist/movielist.component';
import { TagslistComponent } from './tagslist/tagslist.component';

const routes: Routes = [
  {path: 'moviesList', component: MovielistComponent},
  {path: 'tagsList', component: TagslistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
