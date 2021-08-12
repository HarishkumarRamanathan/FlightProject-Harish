import { Flight } from "./flight";

export class BookingHistoryDetail {

    public email:string;
    public flightId:string;
    public flightName:string;
    public dateOfJourney:string;
    public price:number;
    public passengerDetails:any;
    public id:number;

    constructor( email: string,flightId:string,dateOfJourney:string,price:number,passengerDetails:any,id:number,flightName:string) { 
        this.email=email;
        this.flightId=flightId;
        this.dateOfJourney=dateOfJourney;
        this.price=price;
        this.passengerDetails=passengerDetails;
        this.id=id;
        this.flightName=flightName;
     }

}
