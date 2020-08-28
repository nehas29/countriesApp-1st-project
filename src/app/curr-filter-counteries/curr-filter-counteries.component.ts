import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-curr-filter-counteries',
  templateUrl: './curr-filter-counteries.component.html',
  styleUrls: ['./curr-filter-counteries.component.css'],
  providers: [Location]
})
export class CurrFilterCounteriesComponent implements OnInit {

  public allCountriesHavingSimilarCurrency: any ;
  constructor(private _route:ActivatedRoute, private router:Router, public apiService:ApiService, public location:Location) { }

  ngOnInit() {

     //getting name of all countries having similar currency
     let currencyCode = this._route.snapshot.paramMap.get('code');
     console.log(currencyCode)

    this.allCountriesHavingSimilarCurrency = 
    this.apiService.getCountriesFromCurrency(currencyCode).subscribe (

      data=>{
        console.log(data);
        this.allCountriesHavingSimilarCurrency = data;
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )



  }

  public goBackToPreviousPage():any{

    this.location.back();
  }

}
