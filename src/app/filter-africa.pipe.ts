import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './interfaces/country';

@Pipe({
  name: 'filterAfrica'
})
export class FilterAfricaPipe implements PipeTransform {

  transform(allAfricanCountries: Country[], searchFilter: string): Country[] {
    
    if(!allAfricanCountries) return [];
    if(!searchFilter) return allAfricanCountries;

    searchFilter = searchFilter.toLowerCase();

return allAfricanCountries.filter( country => {
      return country.name.toLowerCase().includes(searchFilter);
    });
   
}

}
