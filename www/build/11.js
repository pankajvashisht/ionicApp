webpackJsonp([11],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDemondPageModule", function() { return GetDemondPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_demond__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GetDemondPageModule = /** @class */ (function () {
    function GetDemondPageModule() {
    }
    GetDemondPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__get_demond__["a" /* GetDemondPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__get_demond__["a" /* GetDemondPage */]),
            ],
        })
    ], GetDemondPageModule);
    return GetDemondPageModule;
}());

//# sourceMappingURL=get-demond.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetDemondPage; });
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



/**
 * Generated class for the GetDemondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetDemondPage = /** @class */ (function () {
    function GetDemondPage(session, apis, loadingCtrl, toast, navCtrl, navParams) {
        this.session = session;
        this.apis = apis;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.products = [];
        this.total_record = 0;
        this.product_by = {
            page: 1,
            auth_key: '',
            is_my: '1'
        };
        if (this.session.get_session('user_info')) {
            this.user_info = this.session.get_session('user_info');
            this.product_by.auth_key = "?auth_key=" + this.user_info.auth_key;
        }
    }
    GetDemondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetDemondPage');
    };
    GetDemondPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.apis.demond_product(this.product_by).then(function (data) {
            _this.products = data;
            _this.total_record = _this.products.length;
            loading.dismiss();
        }).catch(function (err) {
            _this.toast_message(err);
            loading.dismiss();
        });
    };
    GetDemondPage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    GetDemondPage.prototype.pagination = function (infiniteScroll) {
        var _this = this;
        this.product_by.page++;
        this.apis.demond_product(this.product_by).then(function (data) {
            _this.total_record = data.length;
            for (var i = 0; i < data.length; i++) {
                _this.products.push(data[i]);
            }
            infiniteScroll.complete();
        }).catch(function (error) {
            _this.toast_message("No For Product");
            _this.total_record = 0;
        });
    };
    GetDemondPage.prototype.details = function (product_details) {
        this.navCtrl.push('ProductdetailsPage', { details: product_details });
    };
    GetDemondPage.prototype.back = function () {
        this.navCtrl.push("HomePage");
    };
    GetDemondPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.apis.demond_product(this.product_by).then(function (data) {
            _this.products = data;
            refresher.complete();
            _this.total_record = _this.products.length;
        }).catch(function (err) {
            _this.toast_message(err);
            refresher.complete();
        });
    };
    GetDemondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-get-demond',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/get-demond/get-demond.html"*/'<!--\n  Generated template for the GetDemondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="theme_background header header-md">\n    <div class="nav_header">\n        <button class="nav_btn nav_back floatLeft" (click)="back()">\n      </button>\n        <div class="nav_header_title floatLeft">\n            <h5>My Demands</h5>\n        </div>\n        \n        <div class="clear"></div>\n    </div>\n  </ion-header>\n\n\n<ion-content padding>\n    <ion-list-header>\n      List of Your Created Demands\n      </ion-list-header>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n    <ion-list>\n        <ion-item  *ngFor="let ten_cat of products" (click)="details(ten_cat)" >\n          <ion-avatar item-start>\n            <img (load)="loaded = true" [src]="(!loaded)?\'assets/imgs/loading.gif\':ten_cat.image" >\n          </ion-avatar>\n          <ion-label>\n          <h2>{{(ten_cat.name.length>20)?ten_cat.name.substring(20,-1)+\'..\':ten_cat.name}}</h2> \n          <p>{{ten_cat.price}}</p>\n        </ion-label>\n          <ion-note item-end="" class="note note-ios">\n              <span class="{{(ten_cat.status==0)?\'dot\':\'dot-green\'}}"></span>\n            </ion-note>\n        </ion-item>\n       \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/get-demond/get-demond.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], GetDemondPage);
    return GetDemondPage;
}());

//# sourceMappingURL=get-demond.js.map

/***/ })

});
//# sourceMappingURL=11.js.map