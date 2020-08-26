import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-regional-view',
  templateUrl: './regional-view.component.html',
  styleUrls: ['./regional-view.component.css']
})
export class RegionalViewComponent implements OnInit {

  public allAsianCountries;
  constructor(public apiService:ApiService) { 
    console.log("api service called")
  }

  ngOnInit() {

    
  }

}
