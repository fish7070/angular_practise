import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap } from 'rxjs';
import { Image } from './_model/image-model';

interface ImageState {
  imageList: Image[];
  imageIndex: number;
  isLastImage: boolean;
}

const initState: ImageState = {
  imageList: [],
  imageIndex: 0,
  isLastImage: false,
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

  readonly isLastImage$ = this.select((state) => state.isLastImage);

  // readonly hasPreviousImage$ = this.select(
  //   (state) => state.imageIndex >= 1 && state.imageList.length != 0
  // );

  // readonly hasNextImage$ = this.select(
  //   (state) =>
  //     state.imageIndex < state.imageList.length - 1 &&
  //     state.imageList.length != 0
  // );

  // readonly isLastImage$ = this.select(
  //   (state) =>
  //     state.imageIndex == state.imageList.length - 1 &&
  //     state.imageList.length != 0
  // );

  readonly vm$ = this.select({
    imageList: this.imageList$,
    imageIndex: this.imageIndex$,
    isLastImage: this.isLastImage$,
  });

  //********* select *********

  //********* updater *********
  readonly setImageList = this.updater((state, imageList: Image[]) => ({
    ...state,
    imageList: imageList,
    imageIndex: 0,
    isLastImage: false
  }));

  // readonly setImageIsEdited = this.updater((state) => {
  //   const currentImageList = state.imageList;
  //   currentImageList[state.imageIndex].isEdited = true;

  //   return { ...state, imageList: currentImageList };
  // });

  readonly setImageIndex = this.updater((state, index: string | number) => ({
    ...state,
    imageIndex: Number(index) || 0,
  }));

  readonly nextImage = this.updater((state) => {
    const isLastImage = state.imageIndex == state.imageList.length - 1 && state.imageList.length != 0
    const currentImageIndex = state.imageIndex
    if(isLastImage) return{...state, isLastImage: true}
    else return {...state, imageIndex: currentImageIndex+1}
  })

  //********* updater *********

  //********* effect *********

  // readonly getImageList = this.effect((void$: Observable<void>) => {
  //   return void$.pipe(
  //     tap(() => {
  //       this.setImageList([]);
  //       this.setImageIndex(0);
  //     })
  //   );
  // });

  readonly skipImage = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.nextImage();
      })
    );
  });

  readonly submitImage = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.currentImageList()[this.currentImageIndex()].isEdited = true
        this.nextImage();
      })
    );
  });

  //********* effect *********

  currentImageList(): Image[]{
    return this.get().imageList;
  }

  currentImageIndex(): number{
    return this.get().imageIndex;
  }
}
