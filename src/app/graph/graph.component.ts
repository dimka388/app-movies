import { Component, Input } from '@angular/core';

@Component({
	selector: 'graph-component',
	moduleId: module.id,
	templateUrl: './graph.component.html',
	styleUrls: ['./graph.component.scss']
})


export class GraphComponent {
	@Input() list: Array<Object>;
}
