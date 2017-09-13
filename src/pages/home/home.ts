import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalData } from '../../app/global'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title:string

  constructor(public navCtrl: NavController, global:GlobalData) {
    global.setAppTitle('Home')
    this.title = global.appTitle
  }

}
