import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {
  public allAfricanCountries: Country[];
  searchFilter: string;
  
  constructor(public apiService:ApiService) { }

  ngOnInit() {
  
    this.allAfricanCountries = 
    this.apiService.getAfricanCountries().subscribe (

      (      data: Country[])=>{
        console.log(data);
        this.allAfricanCountries = data;
      },
      (      error: { errorMessage: any; })=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

  }

}
