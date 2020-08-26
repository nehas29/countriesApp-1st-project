import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {
  public allAsianCountries: any;
  constructor(public apiService:ApiService) { }

  ngOnInit() {

    this.allAsianCountries = 
    this.apiService.getEuropeCountries().subscribe (

      data=>{
        console.log(data);
        this.allAsianCountries = data;
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

}
