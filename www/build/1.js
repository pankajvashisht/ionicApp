webpackJsonp([1],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyPageModule = /** @class */ (function () {
    function VerifyPageModule() {
    }
    VerifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */]),
            ],
        })
    ], VerifyPageModule);
    return VerifyPageModule;
}());

//# sourceMappingURL=verify.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerifyPage = /** @class */ (function () {
    function VerifyPage(push, platform, event, toastCtrl, loadingCtrl, user_session, users, verifiy, navCtrl, navParams, modalCtrl) {
        this.push = push;
        this.platform = platform;
        this.event = event;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user_session = user_session;
        this.users = users;
        this.verifiy = verifiy;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.disable = false;
        this.verifiyForm = this.verifiy.group({
            otp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
        if (this.user_session.get_session('user_info')) {
            this.user_info = this.user_session.get_session('user_info');
            this.auth_key = this.user_info.auth_key;
        }
        else {
            this.navCtrl.push('LoginPage');
        }
    }
    VerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyPage');
    };
    VerifyPage.prototype.back = function () {
        //this.navCtrl.pop();
    };
    VerifyPage.prototype.init_push = function () {
        var _this = this;
        var options = {
            android: {},
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (registration) { return _this.device_token = registration.registrationId; });
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
    };
    VerifyPage.prototype.success = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.users.verifiy_otp(this.verifiyForm, this.auth_key, this.device_token).then(function (data) {
            _this.user_session.set_session('user_info', data);
            _this.event.publish('is_login', true);
            _this.event.publish('information', JSON.stringify(data));
            _this.navCtrl.push('VerifiedPage');
            _this.toast_message('Otp Verified Successfully');
            loading.dismiss();
        }).catch(function (error) {
            _this.toast_message(error);
            loading.dismiss();
        });
    };
    VerifyPage.prototype.resend = function () {
        var _this = this;
        this.disable = true;
        this.users.resend(this.auth_key).then(function (data) {
            _this.toast_message('Otp send');
            _this.disable = false;
        }).catch(function (error) {
            _this.toast_message(error);
        });
    };
    VerifyPage.prototype.toast_message = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/verify/verify.html"*/'\n<ion-content padding class="login_bg">\n  <div class="login_content">\n    <div class="textCenter arrow_back">\n      <button ion-button class="" (click)="back()">\n          <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </div>\n    <h5>Verify</h5>\n    <h4>Sit back and relax! </h4>\n    <h6>while we verify your mobile number</h6>\n    <hr>\n    <form [formGroup]="verifiyForm" (ngSubmit)="success()">\n    <ion-list>\n        <ion-item>\n            <ion-input [(ngModel)]="verifiyForm.otp" formControlName="otp"   required autocomplete="off" type="nuumber" placeholder="code here"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button [disabled]="!verifiyForm.valid" ion-button class="login_btn" >\n      Verify Now\n    </button>\n  </form>\n    <p   class="textCenter">haven\'t received a code yet?<br>\n      <strong  (click)="resend()">Resend</strong>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/verify/verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ })

});
//# sourceMappingURL=1.js.map