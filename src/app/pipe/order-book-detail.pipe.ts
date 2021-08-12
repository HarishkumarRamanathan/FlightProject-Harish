import { Pipe, PipeTransform } from '@angular/core';
import { BookingHistoryDetail } from '../model/bookHistoryDetail';

@Pipe({
  name: 'orderBookDetail'
})
export class OrderBookDetailPipe implements PipeTransform {

  transform(value: any): any {
    const sortedValues = value.sort((a:BookingHistoryDetail, b:BookingHistoryDetail) => 
     { var date =a.dateOfJourney.split('-');
      var newDatea = date[1] + '/' +date[0] +'/' +date[2];
      var date1 =b.dateOfJourney.split('-');
      var newDateb = date1[1] + '/' +date1[0] +'/' +date1[2];
      return new Date(newDatea).getTime()-new Date(newDateb).getTime();
      });
      return sortedValues;
  }

}
