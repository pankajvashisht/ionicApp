webpackJsonp([9],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavListPageModule", function() { return FavListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fav_list__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavListPageModule = /** @class */ (function () {
    function FavListPageModule() {
    }
    FavListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fav_list__["a" /* FavListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fav_list__["a" /* FavListPage */]),
            ],
        })
    ], FavListPageModule);
    return FavListPageModule;
}());

//# sourceMappingURL=fav-list.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_global__ = __webpack_require__(52);
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
 * Generated class for the FavListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavListPage = /** @class */ (function () {
    function FavListPage(session, alterctrl, toast, navCtrl, apis, loadingCtrl, navParams) {
        this.session = session;
        this.alterctrl = alterctrl;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.apis = apis;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.products = [];
        this.app_statics = __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* AppCon */];
        this.total_record = 0;
        this.page = 1;
        this.is_login = true;
        this.user_info = [];
        if (!this.session.get_session('user_info')) {
            this.navCtrl.push('HomePage');
        }
        else {
            this.user_info = this.session.get_session('user_info');
        }
        this.get_products();
    }
    FavListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavListPage');
    };
    FavListPage.prototype.get_products = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.apis.get_fav(this.page, this.user_info['auth_key']).then(function (data) {
            _this.products = data;
            _this.total_record = _this.products.length;
            loading.dismiss();
        }).catch(function (error) {
            loading.dismiss();
            _this.toast_message("No fav Product");
            _this.total_record = 0;
        });
        ;
    };
    FavListPage.prototype.pagination = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.apis.get_fav(this.page, this.user_info['auth_key']).then(function (data) {
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
    FavListPage.prototype.details = function (product_details) {
        this.navCtrl.push('ProductdetailsPage', { details: product_details });
    };
    FavListPage.prototype.back = function () {
        //this.navCtrl.pop();
        this.navCtrl.push('HomePage');
    };
    FavListPage.prototype.do_fav = function (object) {
        var _this = this;
        var id = object.id;
        var index = this.products.indexOf(object);
        this.products.splice(index, 1);
        this.apis.do_fav(id).then(function (data) {
            _this.toast_message(data);
        });
    };
    FavListPage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    FavListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fav-list',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/fav-list/fav-list.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n      </button>\n        <div class="nav_header_title floatLeft">\n            <h5>Favourite List</h5>\n        </div>\n        <button class="nav_btn floatRight nav_filter_dark">\n          </button>\n        <div class="clear"></div>\n    </div>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div class="result_wrapper">\n        <ul>\n            <li *ngFor="let product of products" >\n              <div class="inner_result">\n                <div (click)="do_fav(product)"  [class]="(is_login==true && product[0].is_fav==1)? \'fav_circle fav\': \'fav_circle not_fav\'"></div>\n                <img (click)="details(product)" [src]="(product.media.length>0)?product.media[0].file:app_statics.defult_product_image">\n            </div>\n            <h5>{{(product.name.length>15)?product.name.substring(15,-1)+\'..\':product.name}}</h5>\n            <p> ${{product.price}}</p>\n            </li>\n            \n        </ul>\n        <ion-infinite-scroll *ngIf="total_record>9" (ionInfinite)="pagination($event)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/fav-list/fav-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], FavListPage);
    return FavListPage;
}());

//# sourceMappingURL=fav-list.js.map

/***/ })

});
//# sourceMappingURL=9.js.map