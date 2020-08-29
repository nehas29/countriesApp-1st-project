import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './interfaces/country';

@Pipe({
  name: 'filterAustralia'
})
export class FilterAustraliaPipe implements PipeTransform {

  transform(allAustralianCountries: Country[], searchFilter: string): Country[] {
    
    if(!allAustralianCountries) return [];
    if(!searchFilter) return allAustralianCountries;

    searchFilter = searchFilter.toLowerCase();

return allAustralianCountries.filter( country => {
      return country.name.toLowerCase().includes(searchFilter);
    });
   
}

}
