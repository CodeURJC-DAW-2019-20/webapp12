  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { MatDialog } from '@angular/material/dialog';
  import { LoginService } from '../auth/login.service';
  import { AdvertisementService } from '../service/advertisement.service';
  import { Advertisements } from '../entity/advertisement';

  
  
  
  @Component({
    selector: 'advertisementSearch',
    templateUrl: 'advertisement.component.html'
  })
  export class AdvertisementComponent implements OnInit {
  
    price:any = '';
    rooms:any = '';
    bathrooms:any = '';
    squareMeters:any = '';
    searchType:any = '';
    location:any = '';
    propertyType:any = '';
    id:any = '';
    key:any = '';
    value:any = '';

    advertisements: Advertisements[] = [];
    
    constructor(
      private router: Router, 
      private service: AdvertisementService,
      public loginService: LoginService) { }
  
    ngOnInit() {
      this.service.getAllAdvertisements().subscribe(
        advertisements => this.advertisements = advertisements,
        error => console.log(error)
      );
    }
  
    newAdvertisement() {
      this.router.navigate(['/advertisement/new']);
    }

    search(location:string, price:number,rooms:number,propertyType:string,searchType:string,squareMeters:number,bathrooms:number ) {
      console.log('location: ', location );
      let id_user = localStorage.getItem('id');
      this.service.changeMessage(location+";"+price+";"+rooms+";"+propertyType+";"+searchType+";"+squareMeters+";"+bathrooms)
    //   this.service.searchAdvertisement(location,price,rooms,propertyType,searchType,squareMeters,bathrooms).subscribe(
    //     ads => this.advertisements = ads,
    //     error => console.log(error)
    // );;
      this.router.navigate(['/advertisement'])  
    }
  }
  


