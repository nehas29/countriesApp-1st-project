import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {
  public allEuropianCountries: Country[];
  searchFilter: string;

  constructor(public apiService:ApiService) { }

  ngOnInit() {

    this.allEuropianCountries = 
    this.apiService.getEuropeCountries().subscribe (

      (      data: Country[])=>{
        console.log(data);
        this.allEuropianCountries = data;
      },
      (      error: { errorMessage: any; })=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

}
