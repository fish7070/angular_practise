import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatasetComponentStore } from '../dataset.component-store';
import { ImageComponentStore } from '../image.component-store';
import { Subscription } from 'rxjs';
import { Dataset } from '../_model/dataset-model';
import { Image } from '../_model/image-model';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css'],
})
export class DatasetComponent implements OnInit, OnDestroy {
  datasetList?: Dataset[];
  datasetSuber?: Subscription;
  private _sub = new Subscription();

  constructor(
    private _datasetCS: DatasetComponentStore,
    private _imageCS: ImageComponentStore
  ) {
    // this._datasetCS.state$.subscribe((s) => console.log(s));
  }

  ngOnInit(): void {
    this._datasetCS.getDatasetEntities();
    this.datasetSuber = this._datasetCS.datasetEntities$.subscribe(
      (theDatasetList) => (this.datasetList = theDatasetList)
    );
    this._sub.add(this.datasetSuber);
  }

  onDatasetClick(images: Image[]) {
    this._imageCS.setImageList(images);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
