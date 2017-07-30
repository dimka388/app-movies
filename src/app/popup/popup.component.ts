import { Component, Input } from '@angular/core';

@Component({
	selector: 'popup-component',
	moduleId: module.id,
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss']
})

export class PopupComponent {
	@Input() details: Object;
	closerClickHandler() {
		this.details = null;
	}
}
