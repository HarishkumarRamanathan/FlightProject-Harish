import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingHistoryDate'
})
export class BookingHistoryDatePipe implements PipeTransform {

  constructor(private datePipe:DatePipe){

  }

  transform(value: string): unknown {
    var date1 =value.split('-')
    var newDate = date1[1] + '/' +date1[0] +'/' +date1[2];
    return this.datePipe.transform(newDate,'dd/mm/yyyy');
  }

}
