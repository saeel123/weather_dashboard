import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  getMapData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('users/register',{headers: headers}).map(res => res.json());
  }

}
