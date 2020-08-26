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
    AfricaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    {path:'**', component:NotFoundComponent},

    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
