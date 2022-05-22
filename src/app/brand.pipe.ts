import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(value: string | undefined): string[] {
    if(value){
      return value.slice(value.indexOf('Brands')).replace('Brands:', '').split(',');

    }
    return [];
  }

}
