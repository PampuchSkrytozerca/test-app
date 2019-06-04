import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Picture } from '../../models/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit{
  pictures: Picture[];
  picturesObservable: Observable<Picture[]>;

  constructor(
    private router: Router,
    private moviesService: MoviesService
    ) {}
     ngOnInit(): void {
      this.moviesService.getPictures().subscribe(pictures => {
        this.pictures = pictures;
     });
    }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
