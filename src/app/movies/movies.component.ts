import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
    private router: Router) { }

  ngOnInit() {
    this.moviesService.getCredentials().subscribe(movie => {
      this.movie = movie;
    });
  }

}
