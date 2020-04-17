import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/service/advertisement.service';
import { Advertisement } from 'src/app/entity/advertisement';
/* import { RecomendacionesService } from 'src/app/services/recomendaciones.service'; */


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public price:any = '';
  public rooms:any = '';
  public bathrooms:any = '';
  public squareMeters:any = '';
  public property:any = '';
  public location:any = '';
  public type:any = '';
  public id:any = '';
  public key:any = '';
  public value:any = '';
  public showDelete: boolean = false;
  public showFavo: boolean = true;
  public showRecommend: boolean = false;

  public items: any[] = [];
  advertisement: Advertisement;

  constructor(
    //private recomendacionesService: RecomendacionesService
    private advertisementService: AdvertisementService,
  ) { }

  ngOnInit() {
    /* this.recomendacionesService.listarAdvertisement().toPromise()
    .then( resp => {
      console.log(resp);
      
      this.items = resp;
    }) */
    this.showRecommend = false;
    this.advertisementService.getAdvertisements().toPromise()
    .then(  advertisements => {
      // console.log('advertisements', advertisements);
      
      this.items = advertisements;
    
    })
    .then( () => {
      this.showRecommend = true;
    })
    .catch( error => console.log('error') );
    
    this.advertisementService.getAdvertisement(this.id).subscribe(
      (res: any) => {
          console.log(res);
          this.advertisement = res;
      },
      error1 => console.log(error1)
  );
  }



}
