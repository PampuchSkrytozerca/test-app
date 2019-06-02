
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private http: HttpClient) { }

    public getCredentials(): Observable<any> {
        return this.http.get('./assets/database.json');
    }
}
