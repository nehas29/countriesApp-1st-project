import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-north-america',
  templateUrl: './north-america.component.html',
  styleUrls: ['./north-america.component.css']
})
export class NorthAmericaComponent implements OnInit {
  public allAmericanCountries: Country[];
  searchFilter: string;

  constructor(public apiService:ApiService) { }

  ngOnInit() {

    this.allAmericanCountries = 
    this.apiService.getAmericaCountries().subscribe (

      (      data: Country[])=>{
        console.log(data);
        this.allAmericanCountries = data;
      },
      (      error: { errorMessage: any; })=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

}
