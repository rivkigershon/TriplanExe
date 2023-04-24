import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CityService } from '../../Services/city.service';
import { City } from 'src/app/Models/city';
import { map } from 'rxjs';
import { Location } from 'src/app/Models/location';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  public cities:Array<City> = [];
  public citiesLocation:Array<Location> = [];

  constructor(private http: HttpClient, private httpCityService: CityService) {}
  
  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.httpCityService.getCities().subscribe(
      (data) => {
        this.cities = data.cities;
        this.cities.forEach(city => this.citiesLocation.push({
          latitude: city.bounds.northeast.lat,
          longitude: city.bounds.northeast.lng,
        })); 
      },
      (error) => {
        alert(error.message);
      }
    ); 
  }

}


