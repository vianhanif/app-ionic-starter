import { Component, Input } from '@angular/core';

/**
 * Generated class for the ToolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.html'
})
export class ToolbarComponent {

  @Input('title') inputTitle;
  title: string;

  constructor() {
    this.title = 'Title'
  }

  ngAfterViewInit() {
    this.title = this.inputTitle
  }

}
