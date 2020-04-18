import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../auth/login.service';
import { AdvertisementService } from '../service/advertisement.service';
import { Advertisements } from '../entity/advertisement';




@Component({
  selector: 'advertisement-single',
  templateUrl: 'advertisement-single.component.html'
})
export class AdvertisementSingleComponent{

  advertisement: Advertisements;

  constructor(
    private router: Router, 
    private service: AdvertisementService, activatedRoute: ActivatedRoute) { 
        let id = activatedRoute.snapshot.params['id'];
        this.getAdvertisement(id);
    }

//   ngOnInit() {
//     this.service.getAdvertisements().subscribe(
//       advertisements => this.advertisement = advertisement,
//       error => console.log(error)
//     );
//   }
  
  getAdvertisement(id: number) {
    this.service.getAdvertisement(id).subscribe(
        advertisement => this.advertisement = advertisement,
        error => console.log(error)
    );
}
}

