import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Country } from 'src/app/interfaces/country';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
  public allAsianCountries: Country[];
  searchFilter: string;
  

  constructor(public apiService:ApiService, public forms:FormsModule) { 
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

// get counteries(){
 //  return this.allAsianCountries
 //  ? this.allAsianCountries.filter(country =>
   //  this.searchFilter ?
   //  country.name.includes(this.searchFilter):country)
    // : this.allAsianCountries
// }

  }


