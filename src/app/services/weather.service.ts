import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI: string='';

  constructor(private httpCliente: HttpClient) {
    this.URI = 'http://api.weatherstack.com/current?access_key=c05a772917dcb879a69f6d98036ad6ee&query='
   }

   getWeather(cityName:string, countryName:string){
     return this.httpCliente.get(`${this.URI}${cityName},${countryName}`);

   }
}
