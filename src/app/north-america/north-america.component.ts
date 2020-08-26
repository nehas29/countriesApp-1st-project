import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-north-america',
  templateUrl: './north-america.component.html',
  styleUrls: ['./north-america.component.css']
})
export class NorthAmericaComponent implements OnInit {
  public allAsianCountries: any;
  constructor(public apiService:ApiService) { }

  ngOnInit() {

    this.allAsianCountries = 
    this.apiService.getAmericaCountries().subscribe (

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
