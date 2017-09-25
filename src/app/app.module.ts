import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module'
import { HttpClientModule } from '@angular/common/http'
import { GlobalData } from './global'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode'
import { AppConfig } from './config'
import { Functions } from './functions'

const pages = [
  MyApp,
  LoginPage,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage
]

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    Functions,
    StatusBar,
    SplashScreen,
    GlobalData,
    AppConfig,
    BackgroundMode,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
