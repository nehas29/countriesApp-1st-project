import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common'
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-south-america',
  templateUrl: './south-america.component.html',
  styleUrls: ['./south-america.component.css']
})
export class SouthAmericaComponent implements OnInit {
  public allAmericanCountries: Country[];
  searchFilter: string;

  constructor(public apiService:ApiService, public location:Location) { }

  ngOnInit() {

    this.allAmericanCountries = 
    this.apiService.getAmericaCountries().subscribe (

      data=>{
        console.log(data);
        this.allAmericanCountries = data;
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
