import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let apiUrl = 'http://demo2533026.mockable.io/getData';
    return this.http.get(apiUrl);
  }
}
