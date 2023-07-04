import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImageComponentStore } from '../image.component-store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})
export class ShowImageComponent implements OnInit, OnDestroy {
  vm: any;
  viewModelSuber?: Subscription;
  sub = new Subscription();
  constructor(private _imageCS: ImageComponentStore) {
    this._imageCS.state$.subscribe((s) => console.log(s));
  }

  ngOnInit(): void {
    this.viewModelSuber = this._imageCS.vm$.subscribe((vm) => {
      this.vm = vm;
    });
    this.sub.add(this.viewModelSuber);
  }

  nextImagae() {
    this._imageCS.nextImage();
  }

  submitImage() {
    this._imageCS.submitImage();
  }

  previousImage() {
    this._imageCS.previousImage();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
