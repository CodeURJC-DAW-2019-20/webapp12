
import {Comment} from './comment';

export class Advertisements{

    id?: number;
    type: string;
    property:string;
    rooms:number;
    bathrooms:number;
    squareMeters:number;
    location:string;
    address:string;
    price:number;
    picture:string;
    images : Array<string>;


    constructor(type:string, property:string,rooms:number,bathrooms:number,squareMeters:number,location:string,address:string,price:number){
        this.type = type;
        this.property = property;
        this.rooms=rooms;
        this.bathrooms=bathrooms;
        this.squareMeters=squareMeters;
        this.location=location;
        this.address=address;
        this.price=price;
    }


    //comments: Comment[];
}