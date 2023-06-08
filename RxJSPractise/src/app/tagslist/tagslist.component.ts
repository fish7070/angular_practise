import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { Observable, combineLatest, map } from 'rxjs';
import { Movie, Tag } from '../type/movie';

@Component({
  selector: 'app-tagslist',
  templateUrl: './tagslist.component.html',
  styleUrls: ['./tagslist.component.css'],
})
export class TagslistComponent implements OnInit {
  movies$!: Observable<Movie[]>;

  tags$!: Observable<Tag[]>;
  
  tagslist$!: any;

  constructor(private moviesdataservice: MoviedataService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getTags();

    this.tagslist$ = combineLatest([this.tags$, this.movies$]).pipe(
      map(([tags, movies]) => 
        tags.map(tag => ({
          ...tag,
          movieNames: movies.filter(movie => movie.tagsId.includes(tag.id)).map(movie => movie.name)
        }))
      )
    );
  }

  getMovies(): void {
    this.movies$ = this.moviesdataservice.getMovies();
  }

  getTags(): void {
    this.tags$ = this.moviesdataservice.getTags();
  }
}
