import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GarageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GarageService {

  private feeds: Array<any>;

  constructor(public http: Http) {
    console.log('Hello GarageService Provider');
  }

  enviarComando(url: string): Promise<any> {    
    return new Promise(resolve => { 
       this.http.get(url).map(res => res.json())
        .subscribe(data => {
          this.feeds = data;

          resolve(this.feeds);
        }, err => console.log(err));          
    });
  }
}
