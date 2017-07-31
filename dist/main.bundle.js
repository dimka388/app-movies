webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<div class=\"svg-holder\" (window:resize)=\"onResize($event)\"></div>\n\t<div class=\"top-list\" [ngClass]=\"{ 'active': listOpened }\">\n\t\t<button class=\"opener\"\n\t\t\t(click)=\"openerClickHandler()\"></button>\n\t\t<ol class=\"list\">\n\t\t\t<li *ngFor=\"let item of movies.list\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'favorite': movies.favorite.indexOf(item.idIMDB) > -1,\n\t\t\t\t\t'active': details && details.idIMDB === item.idIMDB\n\t\t\t\t}\">\n\t\t\t\t<button class=\"btn-opener\"\n\t\t\t\t\t(click)=\"itemClickHandler(item)\">{{item.title}}</button>\n\t\t\t\t<button class=\"btn-favorite\"\n\t\t\t\t\t(click)=\"toggleFavorite(item.idIMDB)\">\n\t\t\t\t\t<i class=\"icon-star\"></i>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t</ol>\n\t</div>\n\t<div class=\"popup-holder\" [ngClass]=\"{ 'active': details }\">\n\t\t<div class=\"details-box\" *ngIf=\"details\">\n\t\t\t<button class=\"closer\"\n\t\t\t\t(click)=\"closerClickHandler()\">X</button>\n\t\t\t<img class=\"poster\" src=\"{{details.urlPoster}}\">\n\t\t\t<dl class=\"info\">\n\t\t\t\t<dt>Title:</dt>\n\t\t\t\t<dd>{{details.title}}</dd>\n\t\t\t\t<dt>Info:</dt>\n\t\t\t\t<dd>{{details.plot}}</dd>\n\t\t\t\t<dt>Year:</dt>\n\t\t\t\t<dd>{{details.year}}</dd>\n\t\t\t\t<dt>Rating:</dt>\n\t\t\t\t<dd>{{details.rating}}</dd>\n\t\t\t\t<dt>Genres:</dt>\n\t\t\t\t<dd>\n\t\t\t\t\t<span\n\t\t\t\t\t\t*ngFor=\"let genre of details.genres; let index = index\">{{(index >= 1 ? ', ' : '') + genre}}</span>\n\t\t\t\t</dd>\n\t\t\t\t<dt>Countries:</dt>\n\t\t\t\t<dd>\n\t\t\t\t\t<span\n\t\t\t\t\t\t*ngFor=\"let country of details.countries; let index = index\">{{(index >= 1 ? ', ' : '') + country}}</span>\n\t\t\t\t</dd>\n\t\t\t\t<dt>Directors:</dt>\n\t\t\t\t<dd>\n\t\t\t\t\t<a\n\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t*ngFor=\"let director of details.directors; let index = index\"\n\t\t\t\t\t\thref=\"http://www.imdb.com/name/{{ director.id }}/\">{{(index >= 1 ? ', ' : '') + director.name}}</a>\n\t\t\t\t</dd>\n\t\t\t\t<dt class=\"favorite\">Favorite:</dt>\n\t\t\t\t<dd><button class=\"btn-favorite\"\n\t\t\t\t\t[ngClass]=\"{ 'active': movies.favorite.indexOf(details.idIMDB) > -1}\"\n\t\t\t\t\t(click)=\"toggleFavorite(details.idIMDB)\"><i class=\"icon-star\"></i></button></dd>\n\t\t\t</dl>\n\t\t</div>\n\t\t<div class=\"overlay\"\n\t\t\t(click)=\"closerClickHandler()\"></div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  overflow: hidden; }\n\n.svg-holder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.top-list {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n  .top-list.active .opener:before {\n    -webkit-transform: translate(-50%, -50%) rotate(45deg);\n            transform: translate(-50%, -50%) rotate(45deg); }\n  .top-list.active .opener:after {\n    -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n            transform: translate(-50%, -50%) rotate(-45deg); }\n  .top-list.active .list {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  .top-list .opener {\n    position: fixed;\n    top: 10px;\n    right: 10px;\n    width: 30px;\n    height: 30px;\n    background: none;\n    border: 0;\n    cursor: pointer;\n    z-index: 1; }\n    .top-list .opener:before, .top-list .opener:after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 100%;\n      height: 4px;\n      background: black;\n      -webkit-transform: translate(-50%, -175%) rotate(0deg);\n              transform: translate(-50%, -175%) rotate(0deg);\n      transition: -webkit-transform .5s ease;\n      transition: transform .5s ease;\n      transition: transform .5s ease, -webkit-transform .5s ease; }\n    .top-list .opener:after {\n      -webkit-transform: translate(-50%, 75%) rotate(0deg);\n              transform: translate(-50%, 75%) rotate(0deg); }\n  .top-list .list {\n    margin: 0;\n    padding: 50px 10px 20px 30px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 300px;\n    border: 1px solid #ddd;\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.6);\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    transition: -webkit-transform .5s ease;\n    transition: transform .5s ease;\n    transition: transform .5s ease, -webkit-transform .5s ease; }\n    .top-list .list li {\n      position: relative;\n      margin-bottom: 10px;\n      padding-right: 50px; }\n      .top-list .list li.favorite .btn-favorite {\n        color: #f90; }\n      .top-list .list li.active .btn-opener {\n        font-weight: bold; }\n      .top-list .list li button {\n        background: none;\n        border: none;\n        padding: 0;\n        outline: none;\n        text-align: left;\n        cursor: pointer; }\n        .top-list .list li button.btn-favorite {\n          position: absolute;\n          top: 50%;\n          right: 10px;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          color: #ddd; }\n\n.popup-holder {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .5s ease, visibility .5s ease; }\n  .popup-holder.active {\n    opacity: 1;\n    visibility: visible; }\n  .popup-holder .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: '';\n    background: rgba(0, 0, 0, 0.6); }\n  .popup-holder .details-box {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    padding: 10px;\n    width: 70vw;\n    max-width: 90vw;\n    border: 1px solid #ddd;\n    border-radius: 10px;\n    overflow: hidden;\n    background: white;\n    z-index: 1; }\n    .popup-holder .details-box .closer {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      cursor: pointer;\n      background: none;\n      border: none;\n      font-size: 30px;\n      font-weight: bold; }\n    .popup-holder .details-box .poster {\n      float: left;\n      max-width: 40%;\n      width: 100%;\n      height: auto; }\n    .popup-holder .details-box .info {\n      overflow: hidden;\n      padding: 30px;\n      margin: 0; }\n      .popup-holder .details-box .info dt {\n        margin: 0 10px 0 0;\n        float: left;\n        min-width: 100px;\n        font-weight: bold; }\n        .popup-holder .details-box .info dt.favorite {\n          line-height: 30px; }\n      .popup-holder .details-box .info dd {\n        overflow: hidden;\n        margin: 0 0 20px; }\n      .popup-holder .details-box .info .btn-favorite {\n        background: none;\n        border: none;\n        padding: 0;\n        font-size: 30px;\n        display: inline-block;\n        outline: none; }\n        .popup-holder .details-box .info .btn-favorite i {\n          color: #ddd; }\n        .popup-holder .details-box .info .btn-favorite.active i {\n          color: #f90; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.settings = {
            jsonUrl: 'assets/movies.json',
            circlePadding: 10,
            circleMaxRadius: 8
        };
        this.movies = {
            favorite: localStorage.favorite ? localStorage.favorite.split(',') : []
        };
        this.details = null;
        this.listOpened = false;
        this.http.get(this.settings.jsonUrl)
            .subscribe(function (res) {
            _this.movies['list'] = res.json().data.movies;
            _this.drawCircles();
        });
    }
    AppComponent.prototype.drawCircles = function () {
        var _this = this;
        var svgHolder = document.querySelectorAll('.svg-holder')[0];
        var colors = __WEBPACK_IMPORTED_MODULE_2_d3__["scale"].category20();
        var tick = function (e) {
            circle
                .each(cluster(10 * e.alpha * e.alpha))
                .each(collide(.5))
                .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        };
        var cluster = function (alpha) {
            return function (d) {
                var cluster = circles[d.cluster];
                if (cluster === d) {
                    return;
                }
                var x = d.x - cluster.x, y = d.y - cluster.y, l = Math.sqrt(x * x + y * y), r = d.radius + cluster.radius;
                if (l != r) {
                    l = (l - r) / l * alpha;
                    d.x -= x *= l;
                    d.y -= y *= l;
                    cluster.x += x;
                    cluster.y += y;
                }
            };
        };
        var collide = function (alpha) {
            var quadtree = __WEBPACK_IMPORTED_MODULE_2_d3__["geom"].quadtree(nodes);
            return function (d) {
                var r = d.radius + _this.settings.circleMaxRadius + _this.settings.circlePadding, nx1 = d.x - r, nx2 = d.x + r, ny1 = d.y - r, ny2 = d.y + r;
                quadtree.visit(function (quad, x1, y1, x2, y2) {
                    if (quad.point && (quad.point !== d)) {
                        var x = d.x - quad.point.x, y = d.y - quad.point.y, l = Math.sqrt(x * x + y * y), r_1 = d.radius + quad.point.radius + _this.settings.circlePadding;
                        if (l < r_1) {
                            l = (l - r_1) / l * alpha;
                            d.x -= x *= l;
                            d.y -= y *= l;
                            quad.point.x += x;
                            quad.point.y += y;
                        }
                    }
                    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                });
            };
        };
        var circles = [], width = svgHolder.clientWidth, height = svgHolder.clientHeight;
        var nodes = this.movies['list'].map(function (obj, index) {
            var radius = obj.rating * _this.settings.circleMaxRadius, data = { cluster: index, radius: radius, title: obj.title, id: obj.idIMDB, details: obj };
            if (!circles[index] || (radius > circles[index].radius)) {
                circles[index] = data;
            }
            return data;
        });
        var force = __WEBPACK_IMPORTED_MODULE_2_d3__["layout"].force()
            .nodes(nodes)
            .size([width, height])
            .gravity(.02)
            .charge(0)
            .on('tick', tick)
            .start();
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](svgHolder)
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        var elem = svg.selectAll("g myCircleText")
            .data(nodes);
        var circle = elem.enter()
            .append("g")
            .style('cursor', 'pointer')
            .call(force.drag)
            .on("click", function (d) {
            _this.itemClickHandler(d.details);
        });
        circle.append("circle")
            .attr("r", function (d) {
            return d.radius;
        })
            .attr("cx", function (d) {
            return -(d.radius / 2);
        })
            .attr("cy", function (d) {
            return -(d.radius / 2);
        })
            .style('fill', function (d, i) {
            return colors(i);
        })
            .attr("id", function (d) {
            return d.id;
        });
        circle.append("text")
            .text(function (d) { return d.title; })
            .attr("class", "text")
            .style("text-anchor", "middle")
            .style("font-size", function (d) {
            return Math.min(2 * d.radius, (2 * d.radius) / this.getComputedTextLength() * 15) + "px";
        })
            .attr("dx", function (d) { return -d.radius * 0.5; })
            .attr("dy", function (d) { return -d.radius * 0.4; });
    };
    AppComponent.prototype.onResize = function (event) {
        console.log('need refresh svg');
    };
    AppComponent.prototype.itemClickHandler = function (item) {
        this.details = item;
    };
    AppComponent.prototype.closerClickHandler = function () {
        this.details = null;
    };
    AppComponent.prototype.openerClickHandler = function () {
        this.listOpened = !this.listOpened;
    };
    AppComponent.prototype.toggleFavorite = function (movieId) {
        var index = this.movies['favorite'].indexOf(movieId);
        if (index > -1) {
            this.movies['favorite'].splice(index, 1);
        }
        else {
            this.movies['favorite'].push(movieId);
        }
        localStorage.setItem('favorite', this.movies['favorite'].join(','));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map