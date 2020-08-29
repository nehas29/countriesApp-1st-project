import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Country } from 'src/app/interfaces/country';
import {Location} from '@angular/common'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
  public allAsianCountries: Country[];
  searchFilter: string;
  

  constructor(public apiService:ApiService, public location:Location) { 
    console.log("api service called")
  }

  ngOnInit() {
    
   this.allAsianCountries = this.apiService.getAsianCountries().subscribe (

      (      counteries: Country[])=>{
        console.log(counteries);
        this.allAsianCountries = counteries;
      },
      (      error: { errorMessage: any; })=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    
  }

  public goBackToPreviousPage():any{

    this.location.back();
  }

// get counteries(){
 //  return this.allAsianCountries
 //  ? this.allAsianCountries.filter(country =>
   //  this.searchFilter ?
   //  country.name.includes(this.searchFilter):country)
    // : this.allAsianCountries
// }

  }


