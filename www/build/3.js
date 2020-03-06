webpackJsonp([3],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(toastCtrl, loadingCtrl, user_session, users, UsersignUp, navCtrl, navParams, modalCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user_session = user_session;
        this.users = users;
        this.UsersignUp = UsersignUp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.all_country = [];
        this.signupForm = this.UsersignUp.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            first_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            last_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            country_code: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('93', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
        this.get_country();
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.get_country = function () {
        var _this = this;
        this.users.all_country().then(function (data) {
            _this.all_country = data;
        }).catch(function (error) {
            _this.toast_message(error);
        });
    };
    SignupPage.prototype.submitSignup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.users.signup(this.signupForm).then(function (data) {
            _this.user_session.set_session('user_info', data);
            _this.navCtrl.push('VerifyPage');
            _this.toast_message('Signup successfully');
            loading.dismiss();
        }).catch(function (error) {
            _this.toast_message(error);
            loading.dismiss();
        });
    };
    SignupPage.prototype.toast_message = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\xampp\htdocs\agrohyperMarket\src\pages\signup\signup.html"*/'<ion-content padding class="login_bg">\n  <div class="login_content">\n    <h5>Sign up form</h5>\n    <hr>\n    <form [formGroup]="signupForm" (ngSubmit)="submitSignup()">\n    <ion-list>\n        <ion-item>\n            <ion-input [(ngModel)]="signupForm.first_name" formControlName="first_name" required  placeholder=" First Name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input [(ngModel)]="signupForm.last_name" formControlName="last_name" required placeholder="Last Name"></ion-input>\n        </ion-item>\n        <ion-row>\n            <ion-col col-3>\n        <ion-item>\n           \n            <ion-select   [(ngModel)]="signupForm.country_code" formControlName="country_code"  required>\n                <ion-option *ngFor="let country of all_country"  [value]="country.phonecode">+{{country.phonecode}}</ion-option> \n</ion-select>\n                  </ion-item>   \n                  </ion-col>\n                        \n                <ion-col col-9>\n                    <ion-item>\n            <ion-input  [(ngModel)]="signupForm.phone" formControlName="phone" required placeholder="Phone no"></ion-input>\n          </ion-item>   \n          </ion-col>\n          </ion-row>\n          \n        <ion-item>\n            <ion-input  [(ngModel)]="signupForm.email" formControlName="email" required placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input [(ngModel)]="signupForm.password" formControlName="password" required placeholder="Password" type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button [disabled]="!signupForm.valid" ion-button class="login_btn"  >\n      Sign Up Now\n    </button>\n    </form>\n    <p>Already have an account? Simply login below by<br>\n      <br>\n      <strong (click)="login()" >Back to login</strong>\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\agrohyperMarket\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=3.js.map