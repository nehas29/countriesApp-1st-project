import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.css']
})
export class AustraliaComponent implements OnInit {
  public allAustralianCountries: Country[];
  searchFilter: string;

  constructor(public apiService:ApiService) { }

  ngOnInit() {

    this.allAustralianCountries = 
    this.apiService.getAustraliaCountries().subscribe (

      (      data: Country[])=>{
        console.log(data);
        this.allAustralianCountries = data;
      },
      (      error: { errorMessage: any; })=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

}
