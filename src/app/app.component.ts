import { Component } from '@angular/core';




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
constructor(){}
ngOnInit() {

  console.log("ngoninit is called")
  

    
    

  

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