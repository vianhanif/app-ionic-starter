import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolbarComponent } from './toolbar/toolbar';
@NgModule({
	declarations: [ToolbarComponent],
	imports: [
		IonicPageModule.forChild(ToolbarComponent)
	],
	exports: [ToolbarComponent]
})
export class ComponentsModule {}
