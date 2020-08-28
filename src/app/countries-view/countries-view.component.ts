import { Component, OnInit } from '@angular/core';
//importing route related code
import{ ActivatedRoute, Router } from "@angular/router"
import { ApiService } from '../api.service';
import {Location} from '@angular/common'


@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.css'],
  providers: [Location]
})
export class CountriesViewComponent implements OnInit {

  public currentCountryInformation: any;
  

  constructor(private _route:ActivatedRoute, private router:Router, public apiService:ApiService, public location:Location) {

    console.log("constructor is called");
   }

  ngOnInit() {

    
    console.log('ngOnInit is called');
    //getting name of country
    let countryName = this._route.snapshot.paramMap.get('name');
    console.log(countryName)

     this.currentCountryInformation = this.apiService.getCountryInfo(countryName).subscribe (

      data=>{
        console.log(data);
        this.currentCountryInformation = data;
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
