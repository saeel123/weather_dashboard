import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  biomass: Biomass[];
  hydro: Hydro[];
  hydro_waste: Hydro_waste[];
  solar: Solar[];
  wind: Wind[];
  gas_waste: Gas_waste[];

  biomassLength: number;
  

  //test : Test[];


  //*********** */


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Biomass', 'Hydro', 'Hydro Waste', 'Solar', 'Wind', 'Gas Waste'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  barChartData: Test[] ;

  public pieChartLabels:string[] = ['Biomass', 'Hydro', 'Hydro Waste', 'Solar', 'Wind', 'Gas Waste'];
  public pieChartData:number[] = [4, 1, 221, 3, 981, 176];
  public pieChartType:string = 'pie';

  lat: number = 42.13619;
  lng: number = 24.52028;

  icon : string = 'wind.png';
  
  constructor( private authService: AuthService ) { 
    this.authService.getMapData().subscribe(data => {
      console.log(data);
      this.biomass = data.data.biomas;
      this.gas_waste = data.data.gas_waste;
      this.hydro = data.data.hydro;
      this.hydro_waste = data.data.hydro_waste;
      this.solar = data.data.solar;
      this.wind = data.data.wind;
      
      this.biomassLength =  this.biomass.length;
    });

    this.barChartData = [
      { data: [4, 1, 221, 3, 981, 176], label: 'Series A'}
    ]; 
  }


  ngOnInit() {  
    console.log(this.biomassLength);
       
  }

}

interface Test {
  data: number[],
  label: string
}

interface Biomass {
  type: string;
  lat: number;
  lng: number;
}
interface Hydro {
  type: string;
  lat: number;
  lng: number;
}
interface Hydro_waste {
  type: string;
  lat: number;
  lng: number;
}
interface Solar {
  type: string;
  lat: number;
  lng: number;
}
interface Wind {
  type: string;
  lat: number;
  lng: number;
}
interface Gas_waste {
  type: string;
  lat: number;
  lng: number;
}

