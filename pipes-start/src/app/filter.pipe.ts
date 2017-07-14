import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value : any, filterStatus : string, propName : string) : any {
    if(value.length === 0 || filterStatus === '') {
      return value;
    }
    let filteredArray = [];
    for (const item of value) {
      if (item[propName] === filterStatus) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}
