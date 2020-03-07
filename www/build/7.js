webpackJsonp([7],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsPageModule", function() { return ProductdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdetails__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductdetailsPageModule = /** @class */ (function () {
    function ProductdetailsPageModule() {
    }
    ProductdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productdetails__["a" /* ProductdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productdetails__["a" /* ProductdetailsPage */]),
            ],
        })
    ], ProductdetailsPageModule);
    return ProductdetailsPageModule;
}());

//# sourceMappingURL=productdetails.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(202);
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
 * Generated class for the ProductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductdetailsPage = /** @class */ (function () {
    function ProductdetailsPage(socialSharing, apis, modalCtrl, session, navCtrl, navParams, alterctrl, toast) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.apis = apis;
        this.modalCtrl = modalCtrl;
        this.session = session;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alterctrl = alterctrl;
        this.toast = toast;
        this.product_details = [];
        this.app_statics = __WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */];
        this.is_login = false;
        this.user_info = [];
        if (this.session.get_session('user_info')) {
            this.is_login = true;
            this.user_info = this.session.get_session('user_info');
        }
        if (!this.navParams.get('details')) {
            this.navCtrl.pop();
        }
        else {
            this.product_details = this.navParams.get('details');
            if (this.product_details.media.length == 0) {
                var dummy = {
                    id: 0,
                    file: this.app_statics.defult_product_image
                };
                this.product_details.media.push(dummy);
            }
        }
        var id = 0;
        this.slidertab = id;
        console.log("id", id);
        setTimeout(function () {
            _this.goToSlide(id);
        }, 500);
        console.log(this.product_details);
        this.slidertab = 0;
        this.currentIndex = 0;
        this.count = 0;
    }
    ProductdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductdetailsPage');
    };
    ProductdetailsPage.prototype.goToSlide = function (id) {
        this.slider.slideTo(id, 500);
    };
    ProductdetailsPage.prototype.slideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        this.slidertab = currentIndex;
        console.log("Current index is", currentIndex);
    };
    ProductdetailsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProductdetailsPage.prototype.send_query = function () {
        var type = 1;
        if (this.product_details.hasOwnProperty('min')) {
            type = 2;
        }
        var modal = this.modalCtrl.create('SendqueryPage', { vender_id: this.product_details.user_id, type: type, table_id: this.product_details.id });
        modal.present();
    };
    ProductdetailsPage.prototype.do_fav = function (object) {
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
    ProductdetailsPage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    ProductdetailsPage.prototype.chat = function (product_id, user_id) {
        if (this.is_login) {
            this.navCtrl.push('AllchatPage', { 'product_id': product_id, 'user_id': user_id, product_name: this.product_details.name });
        }
        else {
            var alert_2 = this.alterctrl.create({
                title: 'Login Alert',
                subTitle: 'Please Login First',
                buttons: ['ok']
            });
            alert_2.present();
        }
    };
    ProductdetailsPage.prototype.share = function () {
        var _this = this;
        this.socialSharing.share(this.product_details.name, this.product_details.detail, this.product_details.media[0].file, 'http://www.agrohypermarket.net/product/' + this.product_details.id).then(function () {
            _this.toast_message("Product Share Successfully");
        }).catch(function () {
            _this.toast_message("Opps Cancel");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ProductdetailsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], ProductdetailsPage.prototype, "slider", void 0);
    ProductdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productdetails',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/productdetails/productdetails.html"*/'<ion-header>\n  <div class="nav_header nav_white_header">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n      </button>\n      <div class="nav_header_title floatLeft">\n          <h5>{{(product_details.name.length>15)?product_details.name.substring(20,-1)+\'..\':product_details.name}}</h5>\n      </div>\n      <!-- <button class="nav_btn floatRight nav_cart_dark">\n        </button>\n      <button class="nav_btn floatRight nav_search_dark">\n          </button> -->\n      <div class="clear"></div>\n  </div>\n</ion-header>\n<ion-content>\n  <div class="product_wrapper">\n \n      <div class="product_top_display">\n        <div *ngIf="!product_details.hasOwnProperty(\'min\')" (click)="do_fav(product_details)" [ngClass]="(product_details[0].is_fav==1)?\'fav_circle fav\':\'fav_circle not_fav\'"></div>\n          <ion-slides *ngIf="product_details.media.length>0" pager="false" #mySlider class="hm_service_slide"  (ionSlideDidChange)="slideChanged()">\n              <ion-slide *ngFor="let files of product_details.media">\n                  <img [src]="files.file">\n              </ion-slide>\n          </ion-slides>\n        \n      </div>\n      <div class="product_image_list" *ngIf="product_details.media.length>0">\n          <ion-slides  loop="true" slidesPerView="{{product_details.media.length}}">\n              <ion-slide *ngFor="let file of product_details.media; let i=index" (click)="goToSlide(i)">\n                  <div class="product_image_circle"  [ngClass]="{\'active\' : slidertab == i}" >\n                    <img  [src]="file.file">\n                  </div>\n              </ion-slide>\n              \n          </ion-slides>\n      </div>\n      <div class="product_header">\n        <div class="product_watermark">\n          <!-- <h2>{{(product_details.name.length>45)?product_details.name.substring(45,-1)+\'..\':product_details.name}}</h2> -->\n          <h4>{{(product_details.name.length>60)?product_details.name.substring(60,-1)+\'..\':product_details.name}}</h4>\n        </div>\n        <!-- <p [innerHTML]="(product_details.detail.length>15)?product_details.detail.substring(15,-1)+\'..\':product_details.detail"></p> -->\n        <h4>Price $ {{product_details.price}}</h4>\n        <!-- <div class="product_spec">\n\n        </div> -->\n        <div class="size_chart" *ngIf="is_login">\n          <h5>Do Have Query ?</h5>\n          <ul>\n          Click on Button to send Query :)\n            <button ion-button class="seeall floatRight" (click)="send_query()" >Send Query</button>\n            <div class="clear"></div>\n          </ul>\n        </div>\n        <div class="description">\n          <h5>DESCRIPTION</h5>\n          <p [innerHTML]="product_details.detail">\n            \n          </p>\n        </div>\n      </div>\n  </div>\n    <ion-fab bottom right>\n              <button ion-fab class="theme_light" (click)="share()"><ion-icon name="ios-share-alt"></ion-icon></button>\n          </ion-fab>\n</ion-content>\n<ion-footer padding *ngIf="user_info.id!=product_details.user_id && !product_details.hasOwnProperty(\'min\')">\n<button ion-button class="login_btn" (click)="chat(product_details.id,product_details.user_id)">Tap to Chat</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/productdetails/productdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ProductdetailsPage);
    return ProductdetailsPage;
}());

//# sourceMappingURL=productdetails.js.map

/***/ })

});
//# sourceMappingURL=7.js.map