import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-south-america',
  templateUrl: './south-america.component.html',
  styleUrls: ['./south-america.component.css']
})
export class SouthAmericaComponent implements OnInit {
  public allAmericanCountries: any;
  constructor(public apiService:ApiService) { }

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

}
