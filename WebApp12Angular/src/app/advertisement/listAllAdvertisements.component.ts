import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../auth/login.service';
import { AdvertisementService } from '../service/advertisement.service';

import { Advertisements} from '../entity/advertisement';



@Component({
  selector: 'listAllAdvertisements',
  templateUrl: 'listAllAdvertisements.component.html'
})
export class ListAdvertisementsComponent implements OnInit {

  advertisements: Advertisements[];

  constructor(
    private router: Router, 
    private advertisementService: AdvertisementService,
    public loginService: LoginService) { }

  ngOnInit() {
    this.getAllAdvertisement();
    
  }

  getAllAdvertisement() {
    this.advertisementService.getAllAdvertisements().subscribe(
      advertisements => this.advertisements = advertisements,
      error => console.log(error)
    );
  }
}


