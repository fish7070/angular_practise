import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { ImageComponentStore } from './image.component-store';
import { DatasetComponent } from './dataset/dataset.component';
import { DatasetComponentStore } from './dataset.component-store';

@NgModule({
  declarations: [
    AppComponent,
    ShowImageComponent,
    DatasetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ImageComponentStore, DatasetComponentStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
