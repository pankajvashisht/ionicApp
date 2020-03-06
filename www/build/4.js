webpackJsonp([4],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
    ShopPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop__["a" /* ShopPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop__["a" /* ShopPage */]),
            ],
        })
    ], ShopPageModule);
    return ShopPageModule;
}());

//# sourceMappingURL=shop.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
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
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopPage = /** @class */ (function () {
    function ShopPage(toast, loadingCtrl, apis, navCtrl, navParams) {
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.apis = apis;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.main_category = [];
        this.type = 0;
        this.text = 'Categories';
        this.step = 0;
        this.sub_category = [];
        this.third_category = [];
        if (this.navParams.get('type')) {
            this.type = 1;
            this.text = "Demand Categories";
        }
        console.error(this.type);
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopPage');
    };
    ShopPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.apis.top_ten_category(25).then(function (data) {
            _this.main_category = data;
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            _this.toast_message(err);
        });
    };
    ShopPage.prototype.product = function (id, type, name) {
        var _this = this;
        this.step++;
        this.last_name = this.text;
        this.text = name;
        if (this.step == 1) {
            this.sub_category = [];
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.apis.sub_category(id).then(function (data) {
                _this.sub_category = data;
                loading_1.dismiss();
            }).catch(function (err) {
                loading_1.dismiss();
                _this.toast_message(err);
            });
        }
        else if (this.step == 2) {
            this.third_category = [];
            var loading_2 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_2.present();
            this.apis.third_category(id).then(function (data) {
                _this.third_category = data;
                loading_2.dismiss();
            }).catch(function (err) {
                loading_2.dismiss();
                _this.toast_message(err);
            });
        }
        else if (this.step == 3) {
            this.navCtrl.push('AllProductsPage', { type: type, id: id, demond: this.type });
        }
    };
    ShopPage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    ShopPage.prototype.back = function () {
        this.step--;
        if (this.step < 1) {
            this.text = (this.type == 0) ? "Categories" : "Demond Categories";
        }
        else {
            this.text = this.last_name;
        }
    };
    ShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shop',template:/*ion-inline-start:"C:\xampp\htdocs\agrohyperMarket\src\pages\shop\shop.html"*/'<!--\n  Generated template for the ShopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="theme_background">\n  <div class="nav_header" [ngClass]="(step!=0)?\'nav_white_header\':\'\'">\n      <button *ngIf="step==0" ion-button class="nav_btn floatLeft nav_menu" menuToggle></button>\n      <button *ngIf="step!=0" class="nav_btn nav_back floatLeft" (click)="back()"></button>\n      <div class="nav_header_title floatLeft">\n            <b> {{text}}  </b> \n        </div>\n  </div>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="step==0">\n    <button ion-item inset  *ngFor="let ten_cat of main_category" (click)="product(ten_cat.id,4,ten_cat.name.substring(20,-1))">\n      <ion-avatar item-start>\n        <img src="{{ten_cat.image}}">\n      </ion-avatar>\n      <h2>{{(ten_cat.name.length>40)?ten_cat.name.substring(40,-1)+\'..\':ten_cat.name}}</h2> \n    </button>\n  </ion-list>\n  <ion-list *ngIf="step==1">\n      <button ion-item inset  *ngFor="let ten_cat of sub_category" (click)="product(ten_cat.id,4,ten_cat.name.substring(20,-1))">\n        \n        <h2>{{(ten_cat.name.length>70)?ten_cat.name.substring(70,-1)+\'..\':ten_cat.name}}</h2> \n      </button>\n    </ion-list>\n    <ion-list *ngIf="step==2">\n        <button ion-item inset  *ngFor="let ten_cat of third_category" (click)="product(ten_cat.id,4,ten_cat.name.substring(20,-1))">\n          \n          <h2>{{(ten_cat.name.length>70)?ten_cat.name.substring(70,-1)+\'..\':ten_cat.name}}</h2> \n        </button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\agrohyperMarket\src\pages\shop\shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ShopPage);
    return ShopPage;
}());

//# sourceMappingURL=shop.js.map

/***/ })

});
//# sourceMappingURL=4.js.map