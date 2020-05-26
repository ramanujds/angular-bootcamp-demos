import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';

@Component({
  selector: 'app-covid-client',
  templateUrl: './covid-client.component.html',
  styleUrls: ['./covid-client.component.css']
})
export class CovidClientComponent implements OnInit {

  constructor(private covidClient:HttpClient) { }
  country:Country;
  ngOnInit(): void {
  }

  public covidInfo(country:string){
    this.covidClient.get("https://covid19.mathdro.id/api/countries/"+country).subscribe(
      (response:Country)=>{
        this.country=response
      }
    );

}
}
