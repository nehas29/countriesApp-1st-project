import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {
  public allAsianCountries: any;
  constructor(public apiService:ApiService) { }

  ngOnInit() {
  
    this.allAsianCountries = 
    this.apiService.getAfricanCountries().subscribe (

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
