webpackJsonp([15],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPageModule", function() { return ChatlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatlist__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatlistPageModule = /** @class */ (function () {
    function ChatlistPageModule() {
    }
    ChatlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatlist__["a" /* ChatlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatlist__["a" /* ChatlistPage */]),
            ],
        })
    ], ChatlistPageModule);
    return ChatlistPageModule;
}());

//# sourceMappingURL=chatlist.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatlistPage; });
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
 * Generated class for the ChatlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatlistPage = /** @class */ (function () {
    function ChatlistPage(loadingCtrl, alterctrl, toastCtrl, api, session, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.alterctrl = alterctrl;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.session = session;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.all_message = [];
        this.user_info = [];
        this.is_show = true;
        this.app_statics = __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* AppCon */];
        this.is_login = false;
        this.page = 1;
        if (this.session.get_session('user_info')) {
            this.is_login = true;
            this.user_info = this.session.get_session('user_info');
        }
        else {
            this.navCtrl.push('HomePage');
        }
        this.get_message();
    }
    ChatlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatlistPage');
    };
    ChatlistPage.prototype.get_message = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.api.last_chat(this.user_info.auth_key, 1).then(function (data) {
            loading.dismiss();
            _this.all_message = data;
            _this.total_record = data.length;
            console.log(_this.all_message);
            _this.is_show = false;
        }).catch(function (err) {
            var toast = _this.toastCtrl.create({
                message: err,
                duration: 3000,
                position: 'buttom'
            });
            toast.present();
        });
    };
    ChatlistPage.prototype.saerch_name = function (name) {
        var _this = this;
        this.api.last_chat(this.user_info.auth_key, 1, name).then(function (data) {
            _this.all_message = data;
            _this.total_record = data.length;
            console.log(_this.all_message);
            _this.is_show = false;
        }).catch(function (err) {
            var toast = _this.toastCtrl.create({
                message: err,
                duration: 3000,
                position: 'buttom'
            });
            toast.present();
        });
    };
    ChatlistPage.prototype.chat = function (product_id, user_id, message, product_name) {
        if (this.is_login) {
            this.navCtrl.push('AllchatPage', { 'product_id': product_id, 'user_id': user_id, 'message': message, product_name: product_name });
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
    ChatlistPage.prototype.back = function () {
        this.navCtrl.push('HomePage');
    };
    ChatlistPage.prototype.pagination = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.api.last_chat(this.user_info.auth_key, this.page).then(function (data) {
            _this.total_record = data.length;
            for (var i = 0; i < data.length; i++) {
                _this.all_message.push(data[i]);
            }
            infiniteScroll.complete();
        }).catch(function (error) {
            // this.toast_message("No For Product");
            _this.total_record = 0;
        });
    };
    ChatlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatlist',template:/*ion-inline-start:"C:\xampp\htdocs\agrohyperMarket\src\pages\chatlist\chatlist.html"*/'\n<ion-header>\n  <div class="nav_header nav_white_header">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n    </button>\n      <div class="nav_header_title floatLeft">\n          <h5>Chat List</h5>\n      </div>\n      \n      <div class="clear"></div>\n  </div>\n\n  <ion-toolbar color="white">\n    <ion-searchbar (input)="saerch_name($event.target.value)" placeholder="Search User"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content #content>\n\n  <ion-list>\n      <ion-item *ngFor="let message of all_message" (click)="chat(message.product_id,message.user_info.id,message.all_chat, message.product_name.name)" >\n        <ion-avatar item-left>\n          <img (load)="loaded = true" [src]="(!loaded)?\'assets/imgs/loading.gif\':message.user_info.image">\n        </ion-avatar>\n        <h2>{{message.user_info.first_name}} {{message.user_info.last_name}} ({{(message.product_name.name.length>10)?message.product_name.name.substring(1,10)+\'...\': message.product_name.name}})</h2>\n        <p>{{(message.message.length>15)?message.message.substring(0,15)+\'....\':message.message}} </p>\n      </ion-item>\n    </ion-list>\n    <ion-infinite-scroll *ngIf="total_record>9" (ionInfinite)="pagination($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\agrohyperMarket\src\pages\chatlist\chatlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ChatlistPage);
    return ChatlistPage;
}());

//# sourceMappingURL=chatlist.js.map

/***/ })

});
//# sourceMappingURL=15.js.map