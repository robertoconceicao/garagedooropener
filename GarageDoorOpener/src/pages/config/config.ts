import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { Config } from '../../models/config';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
  config: Config;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.config = this.navParams.data;
    console.log("ConfgiPage: "+this.config);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }  

  salvar(){
		this.navCtrl.setRoot(HomePage, this.config);
	}
}
