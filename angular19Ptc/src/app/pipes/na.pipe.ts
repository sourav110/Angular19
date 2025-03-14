import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (value == null || value == "" || value == undefined) {
      return "N/A";
    } else {
      return value;
    }
  }

}
