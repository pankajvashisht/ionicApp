webpackJsonp([14],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilePageModule = /** @class */ (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */]),
            ],
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());

//# sourceMappingURL=editprofile.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
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



var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(event, loadingCtrl, toast, session, user, navCtrl, navParams, viewCtrl) {
        this.event = event;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.session = session;
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
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
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.save = function () {
        var _this = this;
        if (this.selectedFile) {
            this.user_info.photo = this.selectedFile;
        }
        var loading = this.loadingCtrl.create({
            content: 'Porfile Updated...'
        });
        loading.present();
        this.user.update_profile(this.user_info).then(function (data) {
            _this.toast_message("Profile Update Successfully");
            _this.viewCtrl.dismiss();
            _this.session.set_session('user_info', data);
            _this.event.publish('is_login', true);
            _this.event.publish('information', JSON.stringify(data));
            loading.dismiss();
        }).catch(function (err) {
            _this.toast_message(err);
            loading.dismiss();
        });
    };
    EditprofilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditprofilePage.prototype.onSelectFile = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.user_info.image = event.target.result;
            };
        }
    };
    EditprofilePage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"C:\xampp\htdocs\agrohyperMarket\src\pages\editprofile\editprofile.html"*/'<ion-content>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="dismiss()">\n        </button>\n        <div class="nav_header_title floatLeft">\n            <h5>Edit Profile</h5>\n        </div>\n        <div class="clear"></div>\n    </div>\n    <div class="edit_profile_wrapper" padding>\n        <div class="editprofile_banner">\n            <ion-img [src]="user_info.image" class="edit_profile_circle">\n            \n           \n        </ion-img>\n        <div class="edit_overlay"></div>    \n        <input type="file" accept="image/*" capture  id="image" (change)="onSelectFile($event)">\n        </div>\n        <div class="edit_profile_content">\n            <ion-item>\n                <ion-input [(ngModel)]="user_info.first_name" placeholder="First Name">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input [(ngModel)]="user_info.last_name" placeholder="Last Name">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input readonly [(ngModel)] ="user_info.email" placeholder="dummy@gmail.com">\n                </ion-input>\n            </ion-item>\n         \n            <ion-item>\n                <ion-input [(ngModel)] ="user_info.phone" readonly placeholder="Phone number">\n                </ion-input>\n            </ion-item>\n        </div>\n    </div>\n</ion-content>\n<ion-footer padding>\n    <button ion-button class="login_btn" (click)="save()">SAVE</button>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\agrohyperMarket\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ })

});
//# sourceMappingURL=14.js.map