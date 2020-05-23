webpackJsonp([16],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]),
            ],
        })
    ], LandingPageModule);
    return LandingPageModule;
}());

//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentIndex = 0;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.goToNextSlide = function () {
        this.slides.slideNext();
        this.slides.getActiveIndex();
    };
    LandingPage.prototype.goToPrevSlide = function () {
        this.slides.slidePrev();
        this.slides.getActiveIndex();
    };
    LandingPage.prototype.slideChanged = function () {
        this.currentIndex = this.slides.getActiveIndex();
        console.log(this.currentIndex);
    };
    LandingPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], LandingPage.prototype, "slides", void 0);
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/landing/landing.html"*/'\n<ion-content class="landing_bg">\n    <div class="landing_logo">\n        <img src="assets/imgs/logo-1.png">\n    </div>\n    <ion-slides (ionSlideDidChange)="slideChanged()" pager="true">\n        <ion-slide>\n          <div class="landing_wrapper">\n            <div class="landing_content">\n                <img src="assets/imgs/landing1.png">\n                <p><strong>AHM</strong> for All Agricultural Need Like Machinery, Agro Raw & refined Products, Seeds, Services and Packaging.</p>\n            </div>\n          </div>\n        </ion-slide>\n        <ion-slide>\n            <div class="landing_wrapper">\n                <div class="landing_content">\n                    <img src="assets/imgs/landing2.png">\n                    <p><strong>AHM</strong> give great services and product from worldwide vendor. All at one Platform and offers to our users on Raise There Demands. :)</p>\n                </div>\n              </div>\n        </ion-slide>\n        <ion-slide>\n            <div class="landing_wrapper">\n                <div class="landing_content">\n                    <img src="assets/imgs/landing3.png">\n                    <p><strong>AHM</strong> bring every services provider and there all product in Agriculture on this Platform. So you got all product at AHM without wating time in search anywhere else. </p>\n                </div>\n              </div>\n        </ion-slide>\n      </ion-slides>\n      <div class="landing_bottom">\n        <button ion-button class="skip bottom_btn" [hidden] = "currentIndex == 2"  (click)="goToNextSlide()">Skip Tour</button>\n        <button ion-button class="continue bottom_btn" [hidden] = "currentIndex != 2" (click)="login()">Continue</button>\n       </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ })

});
//# sourceMappingURL=16.js.map