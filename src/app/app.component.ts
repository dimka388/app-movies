import { Component } from '@angular/core';
import {Http} from '@angular/http';

const apiKey: string = 'c0d838a65beba716e98173dd0eb8892b';
const list: Array<any> = [];
const details: Object = null;

@Component({
	selector: 'app',
	moduleId: module.id,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	list = list;
	details = details;

	itemClickHandler(item) {
		this.http.get('https://api.themoviedb.org/3/movie/' + item.id + '?api_key=' + apiKey + '&language=en-US')
			.subscribe(res => this.details = res.json());
	}

	constructor(private http:Http) {
		this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + apiKey + '')
			.subscribe(res => this.list = res.json());
	}
}
