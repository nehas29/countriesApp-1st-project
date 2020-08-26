import { Injectable } from '@angular/core';
//importing http client to make the requests
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
//import observable related code.
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/do'
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public baseUrl = 'https://restcountries.eu/rest/v2'

  constructor(private _http:HttpClient) { 
    console.log ('Service called')
  }

  //method to get all countries of asia region
  public getAsianCountries(): any {
     let myResponse = this._http.get(this.baseUrl+'/region/asia');
     console.log(myResponse);
     return myResponse;
  }
  //method to get information of single  country 
  public getCountryInfo(countryName): any {
    
    let myResponse = this._http.get(this.baseUrl+'/name/'+countryName);
    console.log(myResponse);
    return myResponse;   

  }


 

}
