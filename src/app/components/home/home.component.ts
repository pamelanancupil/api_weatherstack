import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weather;
  

  constructor(private weatherService: WeatherService) {
    
   }

  ngOnInit(): void {
  
  }

  getWeather(cityName:string, countryName:string){
    this.weatherService.getWeather(cityName, countryName)
    .subscribe(
      res => { console.log(res);
             this.weather = res
            },
      err => console.log(err)
    )

  }

  submitLocation(cityName, countryName){
    this.getWeather(cityName.value, countryName.value);

    console.log(cityName.value, countryName.value);
    cityName.value= '';
    countryName.value = '';
    cityName.focus();
    return false;
  }

}
