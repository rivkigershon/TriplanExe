import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { City } from 'src/app/Models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  baseURL = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get(`${this.baseURL}getCities`);
  }
}
