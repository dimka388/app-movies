import { Component } from '@angular/core';
import {Http} from '@angular/http';
import * as d3 from "d3";

const movies: Object = {};
const details: Object = null;
const settings: any = {
	favoritesUrl: 'https://597e464950cf410011fd016d.mockapi.io/favorites',
	moviedbUrl: 'https://api.themoviedb.org/3',
	apiKey: 'c0d838a65beba716e98173dd0eb8892b',
	circlePadding: 10,
	circleMaxRadius: 12
}

@Component({
	selector: 'app',
	moduleId: module.id,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	movies = movies;
	details = details;

	constructor(private http:Http) {
		this.http.get(settings.moviedbUrl + '/discover/movie?sort_by=popularity.desc&api_key=' + settings.apiKey)
			.subscribe(res => {
				this.movies['list'] = res.json().results;
				this.drawCircles();
			});
		this.http.get(settings.favoritesUrl)
			.subscribe(res => {
				this.movies['favorite'] = res.json();
			});
	}

	drawCircles() {
		const svgHolder = document.querySelectorAll('.svg-holder')[0];
		const colors = d3.scale.category20();
		const tick = (e) => {
			circle
				.each(cluster(10 * e.alpha * e.alpha))
				.each(collide(.5))
				.attr("transform", (d) => {
					return "translate("+d.x+","+d.y+")";
				})
		};
		const cluster = (alpha) => {
			return (d) => {
				let cluster = circles[d.cluster];
				if (cluster === d) {
					return;
				}
				let x = d.x - cluster.x,
						y = d.y - cluster.y,
						l = Math.sqrt(x * x + y * y),
						r = d.radius + cluster.radius;
				if (l != r) {
					l = (l - r) / l * alpha;
					d.x -= x *= l;
					d.y -= y *= l;
					cluster.x += x;
					cluster.y += y;
				}
			};
		};
		const collide = (alpha) => {
			let quadtree = d3.geom.quadtree(nodes);
			return (d) => {
				let r = d.radius + settings.circleMaxRadius + settings.circlePadding,
					nx1 = d.x - r,
					nx2 = d.x + r,
					ny1 = d.y - r,
					ny2 = d.y + r;
				quadtree.visit((quad, x1, y1, x2, y2) => {
					if (quad.point && (quad.point !== d)) {
						let x = d.x - quad.point.x,
							y = d.y - quad.point.y,
							l = Math.sqrt(x * x + y * y),
							r = d.radius + quad.point.radius + settings.circlePadding;
						if (l < r) {
							l = (l - r) / l * alpha;
							d.x -= x *= l;
							d.y -= y *= l;
							quad.point.x += x;
							quad.point.y += y;
						}
					}
					return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
				});
			};
		}
		let circles = [],
			width = svgHolder.clientWidth,
			height = svgHolder.clientHeight;

		let nodes = this.movies['list'].map((obj, index) => {
			let radius = obj.vote_average * settings.circleMaxRadius,
				data = {cluster: index, radius: radius, title: obj.title, id: obj.id};
				if (!circles[index] || (radius > circles[index].radius)) {
					circles[index] = data;
				}
			return data;
		});

		let force = d3.layout.force()
			.nodes(nodes)
			.size([width, height])
			.gravity(.02)
			.charge(0)
			.on('tick', tick)
			.start();

		let svg = d3.select(svgHolder)
			.append("svg")
			.attr("width", width)
			.attr("height", height);

		let elem = svg.selectAll("g myCircleText")
			.data(nodes)

		let circle = elem.enter()
			.append("g")
			.call(force.drag)
			.on("click", (d) => {
				this.itemClickHandler(d);
			});

		circle.append("circle")
			.attr("r", (d) => {
				return d.radius;
			})
			.attr("cx", (d) => {
				return - (d.radius / 2);
			})
			.attr("cy", (d) => {
				return - (d.radius / 2);
			})
			.style('fill', (d, i) => {
				return colors(i);
			})
			.attr("id", (d) => {
				return d.id;
			})

		circle.append("text")
			.text((d) => { return d.title; })
			.attr("class", "text")
			.style("text-anchor", "middle")
			.style("font-size", function(d) {
				return Math.min(2 * d.radius, (2 * d.radius) / this.getComputedTextLength() * 15) + "px";
			})
			.attr("dx", (d) => { return -d.radius * 0.5; })
			.attr("dy", (d) => { return -d.radius * 0.4; });
	}

	onResize(event) {
		console.log('resize')
	}

	itemClickHandler(item: any) {
		this.http.get(settings.moviedbUrl + '/movie/' + item.id + '?api_key=' + settings.apiKey + '&language=en-US')
			.subscribe(res => this.details = res.json());
	}

	closerClickHandler() {
		this.details = null;
	}

	isFavoriteId(movieId: number) {
		return this.movies['favorite'].filter((obj) => {
			if (movieId === obj.movie) {
				return true;
			}
		}).length;
	}

	toggleFavorite(movieId: number) {
		if (this.movies['favorite'].length) {
			if (this.isFavoriteId(movieId)) {
				this.http.delete(settings.favoritesUrl+'/'+movieId)
					.subscribe(res => {
						// this.movies['favorite'] = res.json();
						console.log('delete', this.movies['favorite']);
					});
			} else {
				this.http.post(settings.favoritesUrl, {movie: movieId})
					.subscribe(res => {
						// this.movies['favorite'] = res.json();
						console.log('post', this.movies['favorite']);
					});
			}
		} else {
			this.http.post(settings.favoritesUrl, {movie: movieId})
				.subscribe(res => {
					// this.movies['favorite'] = res.json();
					console.log('post', res.json());
				});
		}
	}
}
