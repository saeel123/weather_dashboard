import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    console.log("test");
   

    this.authService.getMapData().subscribe(data => {
      console.log(data);
    });
  }

  

}
