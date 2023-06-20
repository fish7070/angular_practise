import { Component, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest, from, map, of } from 'rxjs';
import { MoviedataService } from '../moviedata.service';
import { Movie, Tag } from '../type/movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  movies$!: Observable<Movie[]>;

  tags$!: Observable<Tag[]>;

  movieslist$!: any;
  temp: any;

  constructor(private moviesdataservice: MoviedataService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getTags();

    // this.movieslist$ = combineLatest([this.movies$, this.tags$]).pipe(
    //   map(([movies, tags]) => {
    //     return movies.map(movie => ({
    //       ...movie,
    //       tagNames: movie.tagsId.map(tagId => 
    //         (tags.find(tag => tag.id === tagId) || {}).name)
    //     }));
    //   }),
    // )
    this.temp = combineLatest([this.movies$, this.tags$]);
    console.log(this.temp);

  }

  getMovies(): void {
    this.movies$ = this.moviesdataservice.getMovies();
  }

  getTags(): void {
    this.tags$ = this.moviesdataservice.getTags();
  }
}
