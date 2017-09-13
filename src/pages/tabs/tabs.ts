import { Component } from '@angular/core';

import { GlobalData } from '../../app/global'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tabs = []
  activeTab:number

  constructor(global:GlobalData) {
    this.activeTab = global.activeTab
    global.setTabs([
      { app: HomePage, name: 'Home', icon: 'speedometer' },
      { app: AboutPage, name: 'About', icon: 'cart' },
      { app: ContactPage, name: 'Contact', icon: 'cube' }
    ])
    this.tabs = global.tabs
  }
}
