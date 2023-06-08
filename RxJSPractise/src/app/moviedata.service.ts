import { Injectable } from '@angular/core';
import { MOVIES } from './data/movies';
import { TAGS } from './data/tags';
import { Observable, from, of } from 'rxjs';
import { Movie, Tag } from './type/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviedataService {
  movies = MOVIES;
  tags = TAGS;

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  getTags(): Observable<Tag[]> {
    return of(this.tags);
  }
}
