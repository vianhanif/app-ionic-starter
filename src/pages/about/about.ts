import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalData } from '../../app/global'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  title:string

  constructor(public navCtrl: NavController, public global:GlobalData) {
    global.setAppTitle('About')
    this.title = global.appTitle
  }

}
