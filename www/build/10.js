webpackJsonp([10],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = /** @class */ (function () {
    function HomePage(event, toast, apis, alterctrl, session, loadingCtrl, navCtrl, navParams) {
        var _this = this;
        this.event = event;
        this.toast = toast;
        this.apis = apis;
        this.alterctrl = alterctrl;
        this.session = session;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.main_category = [];
        this.top_vendors = [];
        this.featured = [];
        this.top_sale = [];
        this.all_products = [];
        this.app_statics = __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* AppCon */];
        this.is_login = false;
        this.pushPage = 'AddDemondPage';
        this.user_info = [];
        this.page = 1;
        this.search_data = '';
        this.search_page = 1;
        if (this.session.get_session('user_info')) {
            this.is_login = true;
            this.user_info = this.session.get_session('user_info');
            this.auth_key = this.user_info.auth_key;
            console.log(this.user_info);
        }
        this.event.subscribe('information', function (data) {
            _this.user_info = data;
        });
        this.event.subscribe('is_login', function (data) {
            _this.is_login = data;
        });
        this.top_category();
        this.get_vendor();
        this.get_feature_product();
        this.get_all_product();
        this.top_sales();
    }
    // get all category
    HomePage.prototype.top_category = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.apis.top_ten_category().then(function (data) {
            _this.main_category = data;
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            _this.toast_message(err);
        });
    };
    // get all vendors 
    HomePage.prototype.get_vendor = function () {
        var _this = this;
        this.apis.top_ten_vendor().then(function (data) {
            _this.top_vendors = data;
        }).catch(function (err) {
            _this.toast_message(err);
        });
        ;
    };
    // get the feature products
    HomePage.prototype.get_feature_product = function () {
        var _this = this;
        this.apis.top_ten_feature().then(function (data) {
            _this.featured = data;
        }).catch(function (err) {
            _this.toast_message(err);
        });
        ;
    };
    // top sale product
    HomePage.prototype.top_sales = function () {
        var _this = this;
        this.apis.top_ten_sale().then(function (data) {
            _this.top_sale = data;
        }).catch(function (err) {
            _this.toast_message(err);
        });
        ;
    };
    HomePage.prototype.get_all_product = function () {
        var _this = this;
        this.apis.all_product(1, this.auth_key).then(function (data) {
            _this.all_products = data;
            _this.total_record = _this.all_products.length;
        }).catch(function (err) {
            _this.toast_message(err);
        });
    };
    HomePage.prototype.product = function (id, type) {
        this.navCtrl.push('AllProductsPage', { type: type, id: id });
    };
    HomePage.prototype.details = function (product_details) {
        this.navCtrl.push('ProductdetailsPage', { details: product_details });
    };
    HomePage.prototype.seemore = function (type) {
        this.navCtrl.push('AllProductsPage', { type: type, id: 123 });
    };
    //for fav
    HomePage.prototype.do_fav = function (object) {
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
    HomePage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    HomePage.prototype.searchdata = function (data) {
        var _this = this;
        this.page = 1;
        this.apis.all_product(1, this.auth_key, data).then(function (data) {
            _this.all_products = data;
            _this.total_record = _this.all_products.length;
        }).catch(function (err) {
            _this.toast_message(err);
        });
    };
    HomePage.prototype.pagination = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.apis.all_product(this.page, this.auth_key, this.search_data).then(function (data) {
            _this.total_record = data.length;
            for (var i = 0; i < data.length; i++) {
                _this.all_products.push(data[i]);
            }
            infiniteScroll.complete();
        }).catch(function (error) {
            _this.toast_message("No For Product");
            _this.total_record = 0;
        });
    };
    HomePage.prototype.goChat = function () {
        this.navCtrl.push('ChatlistPage');
    };
    HomePage.prototype.Vendors = function (data) {
        this.navCtrl.push('VendorProfilePage', { user_info: data });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/home/home.html"*/'<ion-header class="home-page-header"> \n  <div class="nav_header">\n      <button ion-button class="nav_btn floatLeft nav_menu" menuToggle></button>\n      <div class="nav_header_title floatLeft">\n          <!-- <img src="assets/imgs/logo-1.png">  -->\n          <img src="assets/imgs/ahm-logo-white-small.jpg"> \n    </div>\n<button ion-button class="nav_btn floatRight nav_option" (click)="goChat()"></button>\n  </div>\n    <div class="nav_header">\n      <ion-searchbar class="home_search_bar" [(ngModel)]="search_data" (input)="searchdata($event.target.value)"  placeholder="Search Product Here">\n      </ion-searchbar>\n  </div>\n</ion-header>\n<ion-content>\n  <div class="home_content">\n  <div class="home_menu_banner" *ngIf="search_data.length==0">\n        <ul>\n            <li *ngFor="let ten_cat of main_category" (click)="product(ten_cat.id,2)">\n                <img src="{{ten_cat.image}}">\n                <p>{{(ten_cat.name.length>40)?ten_cat.name.substring(40,-1)+\'\':ten_cat.name}}</p>\n            </li>\n\n            <div class="clear"></div>\n        </ul>\n    </div>\n  </div>\n    <div class="fashion_store_wrapper">\n        <div class="fashion_banner_slider" *ngIf="main_category.length>0 && search_data.length==0">\n            <ion-slides loop="true" pager="true" zoom="true" autoplay="2000" effect="coverflow" speed="1000" slidesPerView="1">\n                <ion-slide  *ngFor="let ten_cat of main_category" (click)="product(ten_cat.id,2)">\n                    <img [src]="ten_cat.slider_image" >\n                </ion-slide>\n\n            </ion-slides>\n        </div>\n        <div class="fashion_header"  *ngIf="search_data.length==0">\n            <h6>TOP Vendors</h6>\n          \n            <div class="clear"></div>\n        </div>\n        <div class="top_brand_slider"  *ngIf="search_data.length==0 && top_vendors.length>0">\n            <ion-slides loop="true" autoplay="1000" speed="1000" slidesPerView="2.5">\n                <ion-slide *ngFor="let vendor of top_vendors" (click)="Vendors(vendor)">\n                    <div class="top_brand_circle">\n                        <img  (load)="loaded = true" [src]="(!loaded)?\'assets/imgs/loading.gif\':vendor.image">\n                    </div>\n                    <h5>{{vendor.first_name}} {{vendor.last_name}}</h5>\n                    <p>{{vendor.city}}</p>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <!-- <div class="fashion_header"  *ngIf="search_data.length==0">\n            <h6>TOP TRENDS</h6>\n           \n            <div class="clear"></div>\n        </div> -->\n        <!-- <div class="fashion_store_slider"  *ngIf="search_data.length==0">\n            <ion-slides loop="true" pager="false" zoom="true" effect="slide" speed="500" slidesPerView="1.5" spaceBetween="5">\n                <ion-slide (click)="product()">\n                    <img src="assets/imgs/poster1.png">\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <img src="assets/imgs/poster2.png">\n                </ion-slide>\n            </ion-slides>\n        </div> -->\n        <!-- <div class="fashion_store_slider"  *ngIf="search_data.length==0">\n            <ion-slides loop="true" pager="false" zoom="true" effect="slide" speed="500" slidesPerView="2" spaceBetween="5">\n                <ion-slide (click)="product()">\n                    <img src="assets/imgs/poster3.png">\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <img src="assets/imgs/fashion_poster3.png">\n                </ion-slide>\n            </ion-slides>\n        </div> -->\n        <div class="fashion_header"  *ngIf="search_data.length==0">\n            <h6>MOST VIEWED</h6>\n            <button ion-button class="seeall seeall_pink" (click)="seemore(6)">See all</button>\n            <div class="clear"></div>\n        </div>\n        <div class="fashion_most_viewed_slider" *ngIf="top_sale.length>0 && search_data.length==0"  >\n            <ion-slides loop="true" pager="false" zoom="true" effect="slide" speed="500" slidesPerView="3" spaceBetween="8">\n                <ion-slide *ngFor="let sale of top_sale" >\n                    <div (click)="do_fav(sale)" [class]="(is_login && sale[0].is_fav==1)? \'fav_circle fav\': \'fav_circle not_fav\'"></div>\n                    <img (click)="details(sale)"  (load)="loaded = true" [src]="(!loaded)?\'assets/imgs/loading.gif\':(sale.media.length>0)?sale.media[0].file:app_statics.defult_product_image">\n                    <!-- <h5>{{(sale.name.length>10)?sale.name.substring(10,-1)+\'..\':sale.name}}</h5> -->\n                    <p>Get at<strong>${{sale.price}}</strong> </p>\n                </ion-slide>\n\n            </ion-slides>\n        </div>\n        <div class="fashion_header" *ngIf="featured.length>0 && search_data.length==0">\n            <h6>Featured</h6>\n            <button ion-button class="seeall seeall_pink" (click)="seemore(5)">See all</button>\n            <div class="clear"></div>\n        </div>\n        <div class="fashion_most_viewed_slider" *ngIf="featured.length>0 && search_data.length==0">\n            <ion-slides loop="true" pager="false" zoom="true" effect="slide" speed="500" slidesPerView="3" spaceBetween="10">\n                <ion-slide *ngFor="let feature of featured" >\n                    <div (click)="do_fav(feature)" [class]="(is_login && feature[0].is_fav==1)? \'fav_circle fav\': \'fav_circle not_fav\'"></div>\n                    <img (click)="details(feature)"  (load)="loaded = true" [src]="(!loaded)?\'assets/imgs/loading.gif\':(feature.media.length>0)?feature.media[0].file:app_statics.defult_product_image">\n                    <!-- <h5>{{(feature.name.length>10)?feature.name.substring(10,-1)+\'..\':feature.name}}</h5> -->\n                    <p>Get at<strong>${{feature.price}}</strong> </p>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="">\n            <h6>{{(search_data.length==0)?\'More Products\':\'Search Products\'}}</h6>\n\n            <div class="clear"></div>\n        </div>\n\n          <div class="result_wrapper" *ngIf="all_products.length>0">\n      <ul>\n          <li *ngFor="let product of all_products" >\n              <div class="inner_result">\n                  <div (click)="do_fav(product)" [class]="(is_login==true && product[0].is_fav==1)? \'fav_circle fav\': \'fav_circle not_fav\'"></div>\n                  <img (click)="details(product)" (load)="loaded = true"  [src]="(!loaded)?\'assets/imgs/loading.gif\':(product.media.length>0)?product.media[0].file:app_statics.defult_product_image">\n              </div>\n              <h5>{{(product.name.length>30)?product.name.substring(30,-1)+\'\':product.name}}</h5>\n              <p>\n                <span *ngIf="product.international_price>0">\n                    Global: <strong>$ {{product.international_price}} </strong><br />\n                </span>\n                Local:\n                <strong>{{product.price_type}} {{product.price}}</strong>\n            </p>\n                  </li>\n\n      </ul>\n  </div>\n  \n        </div> \n        <ion-fab *ngIf="is_login" bottom right>\n            <button ion-fab class="theme_light"  [navPush]="pushPage" ><ion-icon name="md-add"></ion-icon></button>\n              \n        </ion-fab>\n        <ion-infinite-scroll *ngIf="total_record>9" (ionInfinite)="pagination($event)">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=10.js.map