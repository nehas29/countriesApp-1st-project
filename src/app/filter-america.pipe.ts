import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './interfaces/country';

@Pipe({
  name: 'filterAmerica'
})
export class FilterAmericaPipe implements PipeTransform {

  transform(allAmericanCountries: Country[], searchFilter: string): Country[] {
    
    if(!allAmericanCountries) return [];
    if(!searchFilter) return allAmericanCountries;

    searchFilter = searchFilter.toLowerCase();

return allAmericanCountries.filter( country => {
      return country.name.toLowerCase().includes(searchFilter);
    });
   
}

}
