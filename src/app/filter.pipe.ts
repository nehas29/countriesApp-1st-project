import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './interfaces/country';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allAsianCountries: Country[], searchFilter: string): Country[] {
    
      if(!allAsianCountries) return [];
      if(!searchFilter) return allAsianCountries;

      searchFilter = searchFilter.toLowerCase();

  return allAsianCountries.filter( country => {
        return country.name.toLowerCase().includes(searchFilter);
      });
     
  }

}
