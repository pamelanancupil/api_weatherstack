import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

   }

  ngOnInit(): void {
    this.weatherService.getWeather('santiago','cl')
    .subscribe(
      res=> console.log(res),
      err=> console.log(err)
    )
  }

}
