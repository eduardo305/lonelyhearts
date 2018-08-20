import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})
export class FilterByPipe implements PipeTransform {

  transform(array: any, filters: any): any {

    let filteredValues = array;

    for (const [key, value] of Object.entries(filters)) {
      console.log(key, value);
      if (filteredValues) {
        if (key === 'term') {
          filteredValues = filteredValues.filter(element => element.name.first.toLowerCase().includes(value));
        }

        if (key === 'age') {
          filteredValues = filteredValues.filter(element => this.isInRange(element.dob.age, value));
        }
      }
    }

    return filteredValues;
  }

  isInRange(number, range) {
    const split = range.split('_');
    const lower = parseInt(split[0], 10);
    const higher = parseInt(split[1], 10);

    return number >= lower && number <= higher;
  }

}
