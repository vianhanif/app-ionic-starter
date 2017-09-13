import { Injectable } from '@angular/core'

@Injectable()
export class GlobalData {
  public appTitle:string = ''
  public activeTab:number = 1

  public tabs = []

  setAppTitle(text:string) {
    this.appTitle = text
  }

  setActiveTab(num:number) {
    this.activeTab = num
  }

  setTabs(tabs) {
    this.tabs = tabs
  }

}
