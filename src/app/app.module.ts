import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
	declarations: [
		AppComponent,
		PopupComponent,
		GraphComponent
	],
	imports: [
		BrowserModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
