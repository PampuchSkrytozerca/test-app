import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://picsum.photos/v2/list';
  constructor(private http: HttpClient) {}

  public getPictures(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
