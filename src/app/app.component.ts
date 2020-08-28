import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'countriesApp';
  public country: any
  public allCountries: [ ];
  public inputValue: string ;
constructor(private _route:ActivatedRoute, private router:Router, public apiService:ApiService, public forms:FormsModule){}
ngOnInit() {

  console.log("ngoninit is called")
  this.allCountries = 
    this.apiService.getAllCountries().subscribe (

      (      data)=>{
        console.log(data);
        this.allCountries = data;

      },
      (      error: { errorMessage: any; })=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }


      
    )

    
    

  

}

//public input = this.inputValue
//public searchCountry(input: string){
   //for(var country in this.allCountries  ){
        // var inputVariable = country.name; 
         
       //  var validinput = false;
    // if(inputVariable === input ){
         
      //  validinput = true;
    
   //  }
  // }
// var done = (validinput = true)?this.router.navigate(['/home']):null;
  //done
//}





}