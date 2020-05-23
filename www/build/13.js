webpackJsonp([13],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedPageModule", function() { return VerifiedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verified__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifiedPageModule = /** @class */ (function () {
    function VerifiedPageModule() {
    }
    VerifiedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verified__["a" /* VerifiedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verified__["a" /* VerifiedPage */]),
            ],
        })
    ], VerifiedPageModule);
    return VerifiedPageModule;
}());

//# sourceMappingURL=verified.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifiedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifiedPage = /** @class */ (function () {
    function VerifiedPage(user_session, navCtrl, event, navParams, viewCtrl) {
        this.user_session = user_session;
        this.navCtrl = navCtrl;
        this.event = event;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.user_info = [];
        if (this.user_session.get_session('user_info')) {
            this.user_info = this.user_session.get_session('user_info');
        }
    }
    VerifiedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifiedPage');
    };
    VerifiedPage.prototype.home = function () {
        this.event.publish('is_login', true);
        //this.event.publish('information',this.user_info);
        this.navCtrl.setRoot('HomePage');
    };
    VerifiedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verified',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/verified/verified.html"*/'\n<ion-content padding class="login_bg">\n    <div class="login_content">\n      <div class="check">\n          <ion-icon name="md-checkmark"></ion-icon>\n      </div>\n      <h5>Successfully!</h5>\n      <h6>verified your mobile number</h6>\n      <br>\n      <br>\n      <!-- <button ion-button class="login_btn" (click)="This.navctrl.setroot"> -->\n           <button ion-button class="login_btn" (click)="home()">\n        Take me in\n      </button> \n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/verified/verified.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], VerifiedPage);
    return VerifiedPage;
}());

//# sourceMappingURL=verified.js.map

/***/ })

});
//# sourceMappingURL=13.js.map