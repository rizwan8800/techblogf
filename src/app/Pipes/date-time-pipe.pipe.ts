import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimePipe'
})
export class DateTimePipePipe implements PipeTransform {

  transform(value: string): any {
    const d = new Date(value);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month = months[ d.getMonth() ];
    const year = d.getFullYear();
    const date = d.getDate();
    const  hours = d.getHours();
    const minutes = d.getMinutes();
    return date+", "+month+", "+year+" at "+hours+":"+minutes;
  }

}
