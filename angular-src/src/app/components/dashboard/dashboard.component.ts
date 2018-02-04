import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  biomass: Biomass[];

  lat: number = 51.678418;
  lng: number = 7.809007;
  
  constructor( private authService: AuthService ) { 
    this.authService.getMapData().subscribe(data => {
      console.log(data);
      

      this.biomass = data.data.wind;
    });
  }

  // biomas = [{
  //   lat : 51.678418,
  //   lng : 7.809007},
  //   {
  //     lat : 43.48800,
  //     lng : 28.41156},
  // ];
  
  ngOnInit() {
     
  }

}

interface Biomass {
  type: string;
  lat: number;
  lng: number;
}
