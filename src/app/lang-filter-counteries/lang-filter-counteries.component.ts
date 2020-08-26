import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import{ ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-lang-filter-counteries',
  templateUrl: './lang-filter-counteries.component.html',
  styleUrls: ['./lang-filter-counteries.component.css']
})
export class LangFilterCounteriesComponent implements OnInit {
  public allCountriesSimilarHavinglanguage: any ;
  constructor(private _route:ActivatedRoute, private router:Router, public apiService:ApiService) { 
    console.log("lang-filter-counteries is called")
  }

  ngOnInit() {

     //getting name of all countries having similar language
     let languageCode = this._route.snapshot.paramMap.get('iso639_1');
     console.log(languageCode)

    this.allCountriesSimilarHavinglanguage = 
    this.apiService.getCountriesFromlanguage(languageCode).subscribe (

      data=>{
        console.log(data);
        this.allCountriesSimilarHavinglanguage = data;
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

  }

}
