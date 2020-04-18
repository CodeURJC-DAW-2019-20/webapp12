import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/login.service';
import { AdvertisementService } from '../service/advertisement.service';
import { Advertisements } from '../entity/advertisement';





@Component({
  templateUrl: 'advertisement-list.component.html'
})
export class AdvertisementListComponent implements OnInit {
  message:string = "";
  searchAdvertisements: Advertisements[] = [];
  location: string= "";
  price:any = '';
  rooms:any = '';
  bathrooms:any = '';
  squareMeters:any = '';
  searchType:any = '';
  propertyType:any = '';
  id:any = '';
  key:any = '';
  value:any = '';
  
  constructor(
    private router: Router, 
    private service: AdvertisementService,
    public loginService: LoginService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.message = message);
    var splitted = this.message.split(";", 7);
    this.location = splitted[0]; 
    this.price = splitted[1];
    this.rooms = splitted[2];
    this.propertyType = splitted[3];
    this.searchType = splitted[4];
    this.squareMeters = splitted[5];
    this.bathrooms = splitted[6];
    this.search(this.location,this.price,this.rooms,this.propertyType,this.searchType,this.squareMeters,this.bathrooms)
  }

  search(location:string, price:number,rooms:number,propertyType:string,searchType:string,squareMeters:number,bathrooms:number ) {
    console.log('location: ', location );
    let id_user = localStorage.getItem('id');
    this.service.searchAdvertisement(location,price,rooms,propertyType,searchType,squareMeters,bathrooms).subscribe(
      ads => this.searchAdvertisements = ads,
      error => console.log(error)
  );;
    console.log("cmon"); 
  }
}



