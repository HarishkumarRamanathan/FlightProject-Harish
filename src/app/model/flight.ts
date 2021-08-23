export class Flight {

    public id:number;
    public airlineName: string;
    public fromPlace: string;
    public toPlace: string;
    public startDateTime: string;
    public endDateTime: string;
    public scheduledDays:string[];
    public instrumentUsed:string;
    public totalNoOfSeats:number;
    public totalNoOfBussinessSeats:number;
    public price: number;
    public noOfRows:number;
    public meal:string[];
    public status:string;
   
    

    constructor( id:number,airlineName: string,fromPlace:string,toPlace:string,price: number,scheduledDays:string[],instrumentUsed:string
        ,startDateTime:string,endDateTime:string,totalNoOfSeats:number,totalNoOfBussinessSeats:number,noOfRows:number,meal:string[],status:string
      ) { 
        this.id=id;
        this.airlineName=airlineName;
        this.fromPlace=fromPlace;
        this.toPlace=toPlace;
        this.price=price;
        this.startDateTime=startDateTime;
        this.endDateTime=endDateTime;
        this.scheduledDays=scheduledDays;
        this.instrumentUsed=instrumentUsed;
        this.totalNoOfSeats=totalNoOfSeats;
        this.totalNoOfBussinessSeats=totalNoOfBussinessSeats;
        this.noOfRows=noOfRows;
        this.meal=meal;
        this.status=status;
     }

}