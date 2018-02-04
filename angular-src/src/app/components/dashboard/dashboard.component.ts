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


  biomassc: Biomass[];
  hydroc: Hydro[];
  hydro_wastec: Hydro_waste[];
  solarc: Solar[];
  windc: Wind[];
  gas_wastec: Gas_waste[];


  biomassLength: number;

  showHobbies: boolean = true;
  

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

      this.biomassc = data.data.biomas;
      this.gas_wastec = data.data.gas_waste;
      this.hydroc = data.data.hydro;
      this.hydro_wastec = data.data.hydro_waste;
      this.solarc = data.data.solar;
      this.windc = data.data.wind;


    });

    this.barChartData = [
      { data: [4, 1, 221, 3, 981, 176], label: 'Series A'}
    ];
  ;
  }

  biomassData() {
      this.biomassc = this.biomass;
      this.gas_wastec = [];
      this.hydroc = [];
      this.hydro_wastec = [];
      this.solarc = [];
      this.windc = [];
  }
  gasData() {
      this.biomassc = [];
      this.gas_wastec = this.gas_waste;
      this.hydroc = [];
      this.hydro_wastec = [];
      this.solarc = [];
      this.windc = [];
  }
  hydroData() {
      this.biomassc = [];
      this.gas_wastec = [];
      this.hydroc = this.hydro;
      this.hydro_wastec = [];
      this.solarc = [];
      this.windc = [];
  }
  hydroWData() {
      this.biomassc = [];
      this.gas_wastec = [];
      this.hydroc = [];
      this.hydro_wastec = this.hydro_waste;
      this.solarc = [];
      this.windc = [];
  }
  solarData() {
      this.biomassc = [];
      this.gas_wastec = [];
      this.hydroc = [];
      this.hydro_wastec = [];
      this.solarc = this.solar;
      this.windc = [];
  }
  windData() {
      this.biomassc = [];
      this.gas_wastec = [];
      this.hydroc = [];
      this.hydro_wastec = [];
      this.solarc = [];
      this.windc = this.wind;
  }

  allData() {
    this.biomassc = this.biomass;
    this.gas_wastec = this.gas_waste ;
    this.hydroc = this.hydro;
    this.hydro_wastec = this.hydro_waste;
    this.solarc = this.solar;
    this.windc = this.wind;
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

