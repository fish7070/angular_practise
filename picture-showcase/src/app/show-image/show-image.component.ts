import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImageComponentStore } from '../image.component-store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})
export class ShowImageComponent implements OnInit, OnDestroy {
  vm: any;
  viewModelSuber?: Subscription;
  sub = new Subscription();
  constructor(private _imageCS: ImageComponentStore, private _router: Router) {
    this._imageCS.state$.subscribe((s) => console.log(s));
  }

  ngOnInit(): void {
    this.viewModelSuber = this._imageCS.vm$.subscribe((vm) => {
      this.vm = vm;
    });
    this.sub.add(this.viewModelSuber);
  }

  skipImagae() {
    this._imageCS.skipImage();
    if (this.vm.isLastImage) {
      window.alert('這是最後一張圖片');
      this._router.navigate(['/datasetlist']);
    }
  }

  submitImage() {
    this._imageCS.submitImage();
    if (this.vm.isLastImage) {
      window.alert('這是最後一張圖片');
      this._router.navigate(['/datasetlist']);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
