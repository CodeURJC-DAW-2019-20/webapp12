import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementService} from 'src/app/service/advertisement.service';
/* import { RecomendacionesService } from 'src/app/services/recomendaciones.service'; */
import * as CanvasJS from 'src/assets/static/js/canvasjs.min.js';
import { Advertisements } from 'src/app/entity/advertisement';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showDelete: boolean = false;
  public showFavo: boolean = true;
  public showRecommend: boolean = false;

  public items: any[] = [];
  isUser:  boolean = false; 
  public listaCiuades: any[] = [];



  constructor(
    //private recomendacionesService: RecomendacionesService
    private service: AdvertisementService,
    private router: Router, 

  ) { }

  ngOnInit() {
    /* this.recomendacionesService.listarAdvertisement().toPromise()
    .then( resp => {
      console.log(resp);
      
      this.items = resp;
    }) */
    this.showRecommend = false;
    if ( localStorage.getItem('role') != null ) {
      if (localStorage.getItem('role').localeCompare('ROLE_USER') == 0 && localStorage.getItem('role').localeCompare('ROLE_ADMIN') != 0) {
        this.isUser = true;
        this.service.getRecommendeds().toPromise()
    .then(  advertisements => {
      // console.log('advertisements', advertisements);
      
      this.items = advertisements;
    
    })
    .then( () => {
      this.showRecommend = true;
      // this.mostrarGrafica();
    })
    .catch( error => console.log('error') );
      }
    }
    this.mostrarGrafica();
  }
  



  mostrarGrafica() {
    
    this.service.countCities().toPromise()
    .then( (resp: any) => {
      /* console.log('respuesta ciudades', resp); */
     

       for (let index = 0; index < resp.length; index++) {
        const element:any =  resp[index] 
        for (const key in element) {
          /* console.log('key', key);
          console.log('value', element[key]); */
          this.listaCiuades.push({ y: element[key], label: key });
        }
        
        
      }  
    }).then( () => {
      //console.log('Lista ciudades', this.listaCiuades);
      
      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Anuncios publicados por ciudad"
        },
        data: [{
          type: "column",
          dataPoints: 
            this.listaCiuades
          
        }]
      });
      chart.render();
    })
    .catch( error => {
      console.log('error en ciudades', error);
      
    });


  }

}
