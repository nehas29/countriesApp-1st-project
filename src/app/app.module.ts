import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegionalViewComponent } from './regional-view/regional-view.component';
import { CountriesViewComponent } from './countries-view/countries-view.component';
import { RouterModule,Routes } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropeComponent } from './europe/europe.component';
import { NorthAmericaComponent } from './north-america/north-america.component';
import { SouthAmericaComponent } from './south-america/south-america.component';
import { AustraliaComponent } from './australia/australia.component';
import { AfricaComponent } from './africa/africa.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { LangFilterCounteriesComponent } from './lang-filter-counteries/lang-filter-counteries.component';
import { CurrFilterCounteriesComponent } from './curr-filter-counteries/curr-filter-counteries.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { FilterAfricaPipe } from './filter-africa.pipe';
import { FilterAmericaPipe } from './filter-america.pipe';
import { FilterAustraliaPipe } from './filter-australia.pipe';
import { FilterEuropePipe } from './filter-europe.pipe';

 


@NgModule({
  declarations: [
    AppComponent,
    RegionalViewComponent,
    CountriesViewComponent,
    NotFoundComponent,
    AsiaComponent,
    EuropeComponent,
    NorthAmericaComponent,
    SouthAmericaComponent,
    AustraliaComponent,
    AfricaComponent,
    LangFilterCounteriesComponent,
    CurrFilterCounteriesComponent,
    FilterPipe,
    FilterAfricaPipe,
    FilterAmericaPipe,
    FilterAustraliaPipe,
    FilterEuropePipe,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AutocompleteLibModule,
    FormsModule,
    
    RouterModule.forRoot([
    {path:'home', component:RegionalViewComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'country/:name', component:CountriesViewComponent},
    {path:'asia', component:AsiaComponent},
    {path:'europe', component:EuropeComponent},
    {path:'northamerica', component:NorthAmericaComponent},
    {path:'southamerica', component:SouthAmericaComponent},
    {path:'australia', component:AustraliaComponent},
    {path:'africa', component:AfricaComponent},
    {path:'language/:iso639_1', component:LangFilterCounteriesComponent},
    {path:'currency/:code', component:CurrFilterCounteriesComponent},
    {path:'**', component:NotFoundComponent},

    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
