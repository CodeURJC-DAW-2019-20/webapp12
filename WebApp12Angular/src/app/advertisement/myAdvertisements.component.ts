import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../auth/login.service';
import { AdvertisementService } from '../service/advertisement.service';
import { Advertisements} from '../entity/advertisement';

@Component({
  selector: 'myAdvertisements',
  templateUrl: 'myAdvertisements.component.html'
})
export class MyAdvertisementsComponent implements OnInit {
  advertisements: Advertisements[];
  constructor(
    private advertisementService: AdvertisementService,
    ) { }


  ngOnInit() {
    this.getMyAdvertisements();

  }
  
  getMyAdvertisements() {
    this.advertisementService.getMyAdvertisements().subscribe(
      advertisements => this.advertisements = advertisements,
      error => console.log(error)
    );
  }
}