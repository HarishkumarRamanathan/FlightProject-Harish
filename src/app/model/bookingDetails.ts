import { Flight } from "./flight";

export class BookingDetail {

    public departDate:string;
    public returnDate:string;
    public bookFlight:Flight;

    constructor( departDate: string,returnDate:string,bookFlight:Flight) { 
        this.departDate=departDate;
        this.returnDate=returnDate;
        this.bookFlight=bookFlight;
     }

}
