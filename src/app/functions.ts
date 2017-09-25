import { Injectable } from '@angular/core'
import {
  LoadingController,
  AlertController
} from 'ionic-angular'

@Injectable()
export class Functions {

  constructor(
    private loading:LoadingController,
    private alert:AlertController
  ) {
  }


  public startLoading (callback, timeout:number = 2000) {
    let loader = this.loading.create({
      content: 'Mohon Tunggu',
    })
    loader.present()
    setTimeout(() => {
      callback()
      loader.dismiss()
    }, timeout)
  }

  public startLoad() {
    let loader = this.loading.create({
      content: 'Mohon Tunggu',
    })
    return loader
  }

  public basicAlert ({title, text}, callback = () => {}) {
    this.alert.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler() {
            callback()
          }
        }
      ]
    }).present()
  }
}
