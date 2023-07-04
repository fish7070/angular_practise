import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, filter, tap, withLatestFrom } from 'rxjs';
import { Image } from './_model/image-model';

interface ImageState {
  imageList: Image[];
  imageIndex: number;
}

const initState: ImageState = {
  imageList: [],
  imageIndex: 0,
};

@Injectable({
  providedIn: 'root',
})
export class ImageComponentStore extends ComponentStore<ImageState> {
  constructor() {
    super(initState);
  }

  //********* select *********
  readonly imageList$ = this.select((state) => state.imageList);

  readonly imageIndex$ = this.select((state) => state.imageIndex);

  readonly hasPreviousImage$ = this.select(
    (state) => state.imageIndex >= 1 && state.imageList.length != 0
  );

  readonly hasNextImage$ = this.select(
    (state) =>
      state.imageIndex < state.imageList.length - 1 &&
      state.imageList.length != 0
  );

  readonly vm$ = this.select({
    imageList: this.imageList$,
    imageIndex: this.imageIndex$,
  });

  //********* select *********

  //********* updater *********
  readonly setImageList = this.updater((state, imageList: Image[]) => ({
    ...state,
    imageList: imageList,
    imageIndex: 0,
  }));

  readonly setImageIsEdited = this.updater((state) => {
    const currentImageList = state.imageList;
    currentImageList[state.imageIndex].isEdited = true;

    return { ...state, imageList: currentImageList };
  });

  readonly setImageIndex = this.updater((state, index: string | number) => ({
    ...state,
    imageIndex: Number(index) || 0,
  }));

  // readonly changNextImage = this.updater((state) => {
  //   console.log("changNextImage worked!!!")
  //   if(state.imageIndex < state.imageList.length - 1 &&
  //     state.imageList.length != 0){
  //       return {...state, imageIndex: state.imageIndex + 1}
  //   } else
  //   return {...state}
  // })

  // readonly changPreviousImage = this.updater((state) => {
  //   console.log("changPreviousImage worked!!!")
  //   if(state.imageIndex >= 1 && state.imageList.length != 0) {
  //       return {...state, imageIndex: state.imageIndex - 1}
  //   } else
  //   return {...state}
  // })

  //********* updater *********

  //********* effect *********

  readonly getImageList = this.effect((void$: Observable<void>) => {
    return void$.pipe(
      tap(() => {
        this.setImageList([]);
        this.setImageIndex(0);
      })
    );
  });

  readonly nextImage = this.effect((trigger$) => {
    return trigger$.pipe(
      withLatestFrom(this.hasNextImage$),
      filter(([, hasNextImage]) => {
        if (!hasNextImage) window.alert('這是最後一張圖片');
        return hasNextImage;
      }),
      tap(() => {
        this.setImageIndex(this.get().imageIndex + 1);
      })
    );
  });

  readonly submitImage = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.setImageIsEdited();
      }),

      withLatestFrom(this.hasNextImage$),
      filter(([, hasNextImage]) => {
        if (!hasNextImage) window.alert('這是最後一張圖片');
        this.setImageIsEdited();
        return hasNextImage;
      }),
      tap(() => {
        this.setImageIndex(this.get().imageIndex + 1);
      })
    );
  });

  readonly previousImage = this.effect((trigger$) => {
    return trigger$.pipe(
      withLatestFrom(this.hasPreviousImage$),
      filter(([, hasPreviousImage]) => hasPreviousImage),
      tap(() => {
        this.setImageIndex(this.get().imageIndex - 1);
      })
    );
  });

  //********* effect *********
}
