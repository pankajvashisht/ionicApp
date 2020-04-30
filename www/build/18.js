webpackJsonp([18],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsPageModule", function() { return AllProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_products__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllProductsPageModule = /** @class */ (function () {
    function AllProductsPageModule() {
    }
    AllProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_products__["a" /* AllProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_products__["a" /* AllProductsPage */]),
            ],
        })
    ], AllProductsPageModule);
    return AllProductsPageModule;
}());

//# sourceMappingURL=all-products.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllProductsPage; });
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
 * Generated class for the AllProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllProductsPage = /** @class */ (function () {
    function AllProductsPage(session, alterctrl, toast, navCtrl, apis, loadingCtrl, navParams) {
        this.session = session;
        this.alterctrl = alterctrl;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.apis = apis;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.product_by = {
            id: 0,
            type: 0,
            page: 1,
            is_my: 0,
            auth_key: '?auth_key='
        };
        this.products = [];
        this.app_statics = __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* AppCon */];
        this.total_record = 0;
        this.is_login = false;
        this.demond = 0;
        this.user_info = [];
        if (this.session.get_session('user_info')) {
            this.is_login = true;
            this.user_info = this.session.get_session('user_info');
            this.product_by.auth_key = "?auth_key=" + this.user_info.auth_key;
        }
        if (!this.navParams.get('id')) {
            this.navCtrl.push('HomePage');
        }
        else {
            this.product_by.id = this.navParams.get('id');
            this.product_by.type = this.navParams.get('type');
        }
        if (this.navParams.get('demond')) {
            this.demond = this.navParams.get('demond');
        }
        console.log(this.product_by);
        this.get_products(this.product_by);
    }
    AllProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllProductsPage');
    };
    AllProductsPage.prototype.get_products = function (filter) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        if (this.demond != 1) {
            this.apis.page_product(filter).then(function (data) {
                _this.products = data;
                _this.total_record = _this.products.length;
                loading.dismiss();
            }).catch(function (err) {
                _this.toast_message(err);
            });
        }
        else {
            this.apis.demond_product(filter).then(function (data) {
                _this.products = data;
                _this.total_record = _this.products.length;
                loading.dismiss();
            }).catch(function (err) {
                _this.toast_message(err);
            });
        }
    };
    AllProductsPage.prototype.pagination = function (infiniteScroll) {
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
    AllProductsPage.prototype.details = function (product_details) {
        this.navCtrl.push('ProductdetailsPage', { details: product_details });
    };
    AllProductsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AllProductsPage.prototype.do_fav = function (object) {
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
    AllProductsPage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    AllProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-products',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/all-products/all-products.html"*/'<ion-header>\n	<div class="nav_header nav_white_header">\n		<button class="nav_btn nav_back_dark floatLeft" (click)="back()"></button>\n		<div class="nav_header_title floatLeft">\n			<h5>More Results</h5>\n		</div>\n		<button class="nav_btn floatRight nav_filter_dark"></button>\n		<div class="clear"></div>\n	</div>\n</ion-header>\n\n<ion-content padding>\n	<div class="result_wrapper">\n		<div *ngIf="products.length==0" class="no-product">\n			No Product found\n		</div>\n		<ul>\n			<li *ngFor="let product of products">\n				<div class="inner_result">\n					<div\n						*ngIf="!product.hasOwnProperty(\'min\')"\n						(click)="do_fav(product)"\n						[class]="(is_login==true && product[0].is_fav==1)? \'fav_circle fav\': \'fav_circle not_fav\'"\n					></div>\n					<img\n						(click)="details(product)"\n						(load)="loaded = true"\n						[src]="(!loaded)?\'assets/imgs/loading.gif\':(product.media.length>0)?product.media[0].file:app_statics.defult_product_image"\n					/>\n				</div>\n				<h5>\n					{{(product.name.length>15)?product.name.substring(15,-1)+\'..\':product.name}}\n				</h5>\n				<p>\n					<span *ngIf="product.international_price>0">\n						Global: $ {{product.international_price}} <br />\n					</span>\n					Local: {{product.price_type}} {{product.price}}\n				</p>\n			</li>\n		</ul>\n		<ion-infinite-scroll\n			*ngIf="total_record>9"\n			(ionInfinite)="pagination($event)"\n		>\n			<ion-infinite-scroll-content></ion-infinite-scroll-content>\n		</ion-infinite-scroll>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/all-products/all-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AllProductsPage);
    return AllProductsPage;
}());

//# sourceMappingURL=all-products.js.map

/***/ })

});
//# sourceMappingURL=18.js.map