import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasetComponent } from './dataset/dataset.component';
import { ShowImageComponent } from './show-image/show-image.component';

const routes: Routes = [
  {path:'', redirectTo:'datasetlist', pathMatch:'prefix'},
  {path: 'datasetlist',component: DatasetComponent,},
  {path: 'imageslist', component: ShowImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
