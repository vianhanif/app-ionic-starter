import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { NavController, NavParams } from 'ionic-angular';
import { AppConfig } from '../../app/config'
import { HttpClient } from '@angular/common/http'
import { Md5 } from 'ts-md5/dist/md5'
import { Storage } from '@ionic/storage'
import { TabsPage } from '../../pages/tabs/tabs'
import { Functions } from '../../app/functions'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private input:FormGroup

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public func:Functions,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private config:AppConfig,
    private storage:Storage,
  ) {
    this.input = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  year() {
    return new Date().getFullYear()
  }

  submitLogin() {
    this.func.startLoading(
      () => {
        this.http.post(
          this.config.getConfig().URL.LOGIN,
          {
            ...this.input.value,
            password: Md5.hashStr(this.input.value.password)
          }
        )
        .subscribe(
          payload => {
            let saveUserData = () => {
              this.storage.set('user', payload)
              this.navCtrl.setRoot(TabsPage)
            }
            if (payload['status']) {
              this.storage.get('user').then((value) => {
                if (value === null || value.build !== this.config.getConfig().BUILD) {
                  saveUserData()
                }
              })
            } else {
              this.func.basicAlert(
                { title: 'Perhatian!',
                  text: 'Username atau password salah'
                }
              )
            }
          },
          error => {
            this.func.basicAlert(
              { title: 'Perhatian!',
                text: 'Koeksi gagal'
              }
            )
          }
        )
      },
      2000
    )
  }

}
