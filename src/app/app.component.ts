import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs'
import { LoginPage } from '../pages/login/login'
import { BackgroundMode } from '@ionic-native/background-mode'
import { Functions } from './functions'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    func:Functions,
    splashScreen: SplashScreen,
    storage:Storage,
    backgroundMode:BackgroundMode
  ) {
    let loader = func.startLoad()
    loader.present()
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      backgroundMode.setDefaults({silent: true})
      backgroundMode.enable()
      statusBar.styleDefault();
      storage.get('user').then((data) => {
        if (data) {
          this.rootPage = TabsPage
        } else {
          this.rootPage = LoginPage
        }
        splashScreen.hide();
        loader.dismiss()
      })
    });
  }
}
