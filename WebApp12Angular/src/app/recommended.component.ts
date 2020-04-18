import { Component } from '@angular/core';
import { BlogService } from './service/blog.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Advertisements } from './entity/advertisement';
import { AdvertisementService } from './service/advertisement.service';

@Component({
    selector: 'recommendeds',
    templateUrl:
    './recommended.component.html',
})

export class RecommendedComponent {
    advertisements: Advertisements[];
    isUser: boolean = false;
    constructor(private advertisementService: AdvertisementService,private router: Router) {
        this.advertisements = [];
    }

    ngOnInit() {
        if ( localStorage.getItem('role') != null ) {
            if (localStorage.getItem('role').localeCompare('ROLE_USER') == 0) {
              this.isUser = true;
              this.getRecommendeds();
            }
        }
        this.advertisementService.getRecommendeds().subscribe(
            advertisements => this.advertisements = advertisements,
            error => console.log(error)
        );
    }

    getRecommendeds(){
        this.advertisementService.getRecommendeds().subscribe(
            ads => this.advertisements = ads,
            error => console.log(error)
        );
    }
}