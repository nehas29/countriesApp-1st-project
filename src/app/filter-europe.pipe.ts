import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './interfaces/country';

@Pipe({
  name: 'filterEurope'
})
export class FilterEuropePipe implements PipeTransform {

  transform(allEuropianCountries: Country[], searchFilter: string): Country[] {
    
    if(!allEuropianCountries) return [];
    if(!searchFilter) return allEuropianCountries;

    searchFilter = searchFilter.toLowerCase();

return allEuropianCountries.filter( country => {
      return country.name.toLowerCase().includes(searchFilter);
    });
   
}

}
