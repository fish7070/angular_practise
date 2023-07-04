import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Dataset } from './_model/dataset-model';
import { Observable, tap } from 'rxjs';
import { DATASET } from './_data/dataset';

interface DatasetState {
  datasetEntities: Record<string, Dataset>;
}

const initState: DatasetState = {
  datasetEntities: {},
};

@Injectable({
  providedIn: 'root',
})
export class DatasetComponentStore extends ComponentStore<DatasetState> {
  constructor() {
    super(initState);
  }

  readonly datasetEntities$ = this.select((state) =>
    Object.values(state.datasetEntities)
  );

  readonly setDatasetEntities = this.updater(
    (state, datasetList: Dataset[]) => {
      const currentDatasetList = state.datasetEntities;
      datasetList.map((dataset) => {
        currentDatasetList[dataset.id] = dataset;
      });
      return { ...state, datasetEntities: currentDatasetList };
    }
  );

  readonly getDatasetEntities = this.effect((void$: Observable<void>) => {
    return void$.pipe(
      tap(() => {
        this.setDatasetEntities(DATASET);
      })
    );
  });
}
