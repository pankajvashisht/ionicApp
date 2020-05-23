webpackJsonp([0],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorProfilePageModule", function() { return VendorProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_profile__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VendorProfilePageModule = /** @class */ (function () {
    function VendorProfilePageModule() {
    }
    VendorProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vendor_profile__["a" /* VendorProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vendor_profile__["a" /* VendorProfilePage */]),
            ],
        })
    ], VendorProfilePageModule);
    return VendorProfilePageModule;
}());

//# sourceMappingURL=vendor-profile.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorProfilePage; });
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
 * Generated class for the VendorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorProfilePage = /** @class */ (function () {
    function VendorProfilePage(session, loadingCtrl, alterctrl, toast, apis, navCtrl, navParams) {
        this.session = session;
        this.loadingCtrl = loadingCtrl;
        this.alterctrl = alterctrl;
        this.toast = toast;
        this.apis = apis;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.product_by = {
            id: 0,
            type: 1,
            page: 1,
            is_my: 0,
            auth_key: '?auth_key='
        };
        this.app_statics = __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* AppCon */];
        this.tab = 'all';
        this.position = { lat: -25.363, lng: 131.044 };
        this.products = [];
        this.is_login = false;
        if (this.session.get_session('user_info')) {
            this.is_login = true;
            this.user_info = this.session.get_session('user_info');
            this.product_by.auth_key = "?auth_key=" + this.user_info.auth_key;
        }
        if (!this.navParams.get('user_info')) {
            this.navCtrl.pop();
        }
        else {
            this.user_info1 = this.navParams.get('user_info');
            this.product_by.id = this.user_info1.id;
            this.position['lat'] = parseFloat(this.user_info1['latitude']);
            this.position['lng'] = parseFloat(this.user_info1['longitude']);
        }
        this.get_products(this.product_by);
    }
    VendorProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VendorProfilePage');
        //used setTimeout google map is delayed in loading, in stackBlitz
        // setTimeout(() => {
        //   this.map = new google.maps.Map(this.mapRef.nativeElement, {
        //     zoom: 4,
        //     center: this.position
        //   });
        //   this.marker = new google.maps.Marker({
        //     position: this.position,
        //     map: this.map
        //   });
        // // }, 2000)
        //console.log(this.map.getZoom())
    };
    VendorProfilePage.prototype.get_products = function (filter) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.apis.page_product(filter).then(function (data) {
            _this.products = data;
            _this.total_record = _this.products.length;
            loading.dismiss();
        }).catch(function (err) {
            _this.toast_message(err);
        });
    };
    VendorProfilePage.prototype.pagination = function (infiniteScroll) {
        var _this = this;
        this.product_by.page++;
        this.apis.page_product(this.product_by).then(function (data) {
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
    VendorProfilePage.prototype.details = function (product_details) {
        this.navCtrl.push('ProductdetailsPage', { details: product_details });
    };
    VendorProfilePage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    VendorProfilePage.prototype.do_fav = function (object) {
        var _this = this;
        if (object[0].is_fav == 1) {
            object[0].is_fav = 0;
        }
        else {
            object[0].is_fav = 1;
        }
        if (this.is_login) {
            this.apis.do_fav(object.id).then(function (data) {
                _this.toast_message(data);
            });
        }
        else {
            var alert_1 = this.alterctrl.create({
                title: 'Login Alert',
                subTitle: 'Please Login First',
                buttons: ['ok']
            });
            alert_1.present();
        }
    };
    VendorProfilePage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    VendorProfilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    VendorProfilePage.prototype.maps = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], VendorProfilePage.prototype, "mapRef", void 0);
    VendorProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vendor-profile',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/vendor-profile/vendor-profile.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n        </button>\n        <div class="nav_header_title floatLeft">\n            <h5>{{user_info1.first_name}} {{user_info1.last_name}}</h5>\n        </div>\n        <!-- <button class="nav_btn floatRight nav_cart_dark">\n          </button>\n        <button class="nav_btn floatRight nav_search_dark">\n            </button> -->\n        <div class="clear"></div>\n    </div>\n  </ion-header>\n<ion-content>\n  <div class="profile_wrapper">\n      \n      <div  class="profile_banner">\n          <ion-fab bottom right>\n              <button ion-fab class="theme_light" (click)="map()"><ion-icon name="md-compass"></ion-icon></button>\n          </ion-fab>\n          <ion-img [src]="user_info1.image" class="profie_circle">\n        \n          </ion-img>\n          <h5>{{user_info1.first_name}} {{user_info1.last_name}}</h5>\n          <p>{{user_info1.email}} , <span *ngIf="user_info1.phone>0">{{user_info1.phone}}</span></p>\n          <hr>\n      </div>\n      <!-- <div class="wallet_tab_bay">\n            <ul>\n                <li [class.active]="tab == \'all\'" (click)="tab_swap(\'all\')">All\n                    <hr>\n                </li>\n                <li [class.active]="tab == \'receive\'" (click)="tab_swap(\'receive\')">Received\n                    <hr>\n                </li>\n                <li [class.active]="tab == \'sent\'" (click)="tab_swap(\'sent\')">Sent\n                    <hr>\n                </li>\n            </ul>\n        </div> -->\n      <div class="result_wrapper">\n\n            <div *ngIf="products.length==0" class="no-product">\n                  No Product found \n            </div>\n            <ul>\n                <li *ngFor="let product of products" >\n                  <div class="inner_result">\n                    <div *ngIf="!product.hasOwnProperty(\'min\')" (click)="do_fav(product)"  [class]="(is_login==true && product[0].is_fav==1)? \'fav_circle fav\': \'fav_circle not_fav\'"></div>\n                    <img (click)="details(product)"  (load)="loaded = true" [src]="(!loaded)?\'assets/imgs/loading.gif\':(product.media.length>0)?product.media[0].file:app_statics.defult_product_image">\n                </div>\n                <h5>{{(product.name.length>15)?product.name.substring(15,-1)+\'..\':product.name}}</h5>\n                 <p>\n                <span *ngIf="product.international_price>0">\n                    Global: <strong>$ {{product.international_price}} </strong><br />\n                </span>\n                Local:\n                <strong>{{product.price_type}} {{product.price}}</strong>\n            </p>\n                </li>\n                \n            </ul>\n            <ion-infinite-scroll *ngIf="total_record>9" (ionInfinite)="pagination($event)">\n              <ion-infinite-scroll-content></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n  </div>  \n\n</ion-content>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/vendor-profile/vendor-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], VendorProfilePage);
    return VendorProfilePage;
}());

//# sourceMappingURL=vendor-profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map