import { Component } from '@angular/core';

import { NavController, NavParams, ToastController } from 'ionic-angular';

import { ConfigPage } from '../config/config';
import { Config } from '../../models/config';

import { GarageService } from '../../providers/garage-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  config: Config;
  url: string = "";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public garageSercice: GarageService,
    public toastCtrl: ToastController
    ) {
    this.config = navParams.data;
    console.log("HomePage: "+this.config);
  }

  onConfig() :void{
    this.navCtrl.setRoot(ConfigPage, this.config);
    //this.navCtrl.push(ConfigPage, this.config);
  }

  doLigar() :void {
    console.log("doLigar ...");
    if(!!this.config.ip){
      this.url = this.config.ip;
      if(!!this.config.port){
        this.url += ":" +this.config.port;
      }
      this.garageSercice.enviarComando(this.url)
        .then(data => {
          this.presentToast("Sucesso: "+data);
        })
        .catch(err => {
          this.presentToast("Erro: "+err);
        });
    } else {
       this.presentToast("Falta configurar o endereço do servidor ");
    } 
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
}