import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
  public allAsianCountries: any;
  constructor(public apiService:ApiService) { 
    console.log("api service called")
  }

  ngOnInit() {

    this.allAsianCountries = 
    this.apiService.getAsianCountries().subscribe (

      data=>{
        console.log(data);
        this.allAsianCountries = data;
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allAsianCountries);
  }
  }


