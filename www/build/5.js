webpackJsonp([5],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendqueryPageModule", function() { return SendqueryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendquery__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendqueryPageModule = /** @class */ (function () {
    function SendqueryPageModule() {
    }
    SendqueryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sendquery__["a" /* SendqueryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sendquery__["a" /* SendqueryPage */]),
            ],
        })
    ], SendqueryPageModule);
    return SendqueryPageModule;
}());

//# sourceMappingURL=sendquery.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendqueryPage; });
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
 * Generated class for the SendqueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendqueryPage = /** @class */ (function () {
    function SendqueryPage(loadingCtrl, session, toast, user, navCtrl, navParams, viewCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.session = session;
        this.toast = toast;
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.is_login = false;
        this.user_info = [];
        this.product_info = [{
                message: '',
                auth_key: '',
                vender_id: '',
                table_id: 0,
                table_type: 1
            }];
        if (this.session.get_session('user_info')) {
            this.is_login = true;
            this.user_info = this.session.get_session('user_info');
            this.product_info['auth_key'] = this.user_info.auth_key;
            console.log(this.user_info);
        }
        else {
            this.viewCtrl.dismiss();
        }
        if (!this.navParams.get('vender_id')) {
            this.viewCtrl.dismiss();
        }
        else {
            this.product_info['vender_id'] = this.navParams.get('vender_id');
            this.product_info['table_type'] = this.navParams.get('type');
            this.product_info['table_id'] = this.navParams.get('table_id');
        }
    }
    SendqueryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendqueryPage');
    };
    SendqueryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SendqueryPage.prototype.change_password = function () {
        var _this = this;
        if (this.query == '') {
            this.toast_message("Please Enter Your Query");
            return false;
        }
        this.product_info['message'] = this.query;
        var loading = this.loadingCtrl.create({
            content: 'Sending Query'
        });
        loading.present();
        this.user.send_query(this.product_info).then(function (data) {
            _this.toast_message("Query send Successfully");
            _this.viewCtrl.dismiss();
            loading.dismiss();
        }).catch(function (err) {
            _this.toast_message(err);
            loading.dismiss();
        });
    };
    SendqueryPage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    SendqueryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendquery',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/sendquery/sendquery.html"*/'<ion-content>\n  <div class="nav_header nav_white_header">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="dismiss()">\n      </button>\n      <div class="nav_header_title floatLeft">\n          <h5>Send Query</h5>\n      </div>\n      <div class="clear"></div>\n  </div>\n  <div class="edit_profile_wrapper" padding>\n      <h4>What You want to know?<br></h4><h6>Write Your Query</h6>\n      \n              \n              <ion-list>\n                  \n              </ion-list>\n          <textarea name="" id="myInput" [(ngModel)]="query"  required cols="35" rows="5"></textarea>\n     \n  </div>\n</ion-content>\n<ion-footer padding>\n  <button ion-button class="login_btn" (click)="change_password()" >Send Query</button>\n</ion-footer>'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/sendquery/sendquery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], SendqueryPage);
    return SendqueryPage;
}());

//# sourceMappingURL=sendquery.js.map

/***/ })

});
//# sourceMappingURL=5.js.map