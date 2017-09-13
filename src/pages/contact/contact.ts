import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalData } from '../../app/global'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  title:string

  constructor(public navCtrl: NavController, global:GlobalData) {
    global.setAppTitle('Contact')
    this.title = global.appTitle
  }

}
