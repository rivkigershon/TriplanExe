import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CityService } from '../../Services/city.service';
import { City } from 'src/app/Models/city';
import { map } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  public cities:Array<City> = [];
  public citiesName:Array<String> = [];
  constructor(private http: HttpClient, private httpCityService: CityService) {
  }

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.httpCityService.getCities().subscribe(
      (data) => {
        this.cities = data.cities;
        this.citiesName = this.cities.map(city => city.place.city);;
      },
      (error) => {
        alert(error.message);
      }
    ); 
  }

}


