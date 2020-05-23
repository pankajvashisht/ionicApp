webpackJsonp([11],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
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



var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(loadingCtrl, session, toast, user, navCtrl, navParams, viewCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.session = session;
        this.toast = toast;
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.old_password = '';
        this.new_password = '';
        this.confirm_password = '';
        this.is_login = false;
        this.user_info = [];
        if (this.session.get_session('user_info')) {
            this.is_login = true;
            this.user_info = this.session.get_session('user_info');
            console.log(this.user_info);
        }
        else {
            this.navCtrl.push('HomePage');
        }
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChangepasswordPage.prototype.change_password = function () {
        var _this = this;
        if (this.old_password == '') {
            this.toast_message("Old Password field is required");
            return false;
        }
        if (this.new_password == '' || this.new_password != this.confirm_password) {
            this.toast_message("New Password Not Match with Confirm Password");
            return false;
        }
        var loading = this.loadingCtrl.create({
            content: 'Changing Password..'
        });
        loading.present();
        this.user.changepassword(this.old_password, this.new_password, this.user_info.auth_key).then(function (data) {
            _this.toast_message("Password Change Successfully");
            _this.viewCtrl.dismiss();
            loading.dismiss();
        }).catch(function (err) {
            _this.toast_message(err);
            loading.dismiss();
        });
    };
    ChangepasswordPage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/changepassword/changepassword.html"*/'<ion-content>\n\n    <div class="nav_header nav_white_header">\n\n        <button class="nav_btn nav_back_dark floatLeft" (click)="dismiss()">\n\n        </button>\n\n        <div class="nav_header_title floatLeft">\n\n            <h5>Update Password</h5>\n\n        </div>\n\n        <div class="clear"></div>\n\n    </div>\n\n    <div class="edit_profile_wrapper" padding>\n\n        <h4>Change Password</h4>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-input placeholder="Current Password" [(ngModel)]="old_password" type="passsword"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-input placeholder="New Password" [(ngModel)]="new_password" type="passsword"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-input placeholder="Confirm New Password" [(ngModel)]="confirm_password" type="passsword"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n<ion-footer padding>\n\n    <button ion-button class="login_btn" (click)="change_password()" >UPDATE SAVE</button>\n\n</ion-footer>'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=11.js.map