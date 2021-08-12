import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingCancelDate'
})
export class BookingCancelDatePipe implements PipeTransform {

  transform(value: string): unknown {
    var date =value.split('-');
      var newDate = date[1] + '/' +date[0] +'/' +date[2];
      var dateValue=new Date(newDate);
      var currentDate=Date.now();
      var previousDate=new Date(currentDate);
      var day = 60 * 60 * 24 * 1000;
      var previousDate1 = new Date( previousDate.getTime()+ day);
      if(dateValue<=previousDate1){
        return false;
      }else{
        return true;
      }
  }

}
