webpackJsonp([6],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(event, alertctrl, session, modalCtrl, navCtrl, navParams, viewCtrl, app) {
        var _this = this;
        this.event = event;
        this.alertctrl = alertctrl;
        this.session = session;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
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
        this.event.subscribe('information', function (data) {
            _this.user_info = JSON.parse(data);
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        for (var i = 0; i <= 100; i++) {
            if (2 % i == 0) {
                console.log(i);
            }
            // a++;
        }
    };
    ProfilePage.prototype.editprofile = function () {
        var modal = this.modalCtrl.create('EditprofilePage');
        modal.present();
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertctrl.create({
            title: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Yes, Log Out',
                    handler: function () {
                        localStorage.clear();
                        _this.session.delete_session();
                        _this.rootPage = 'LoginPage';
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilePage.prototype.changepass = function () {
        this.navCtrl.push('ChangepasswordPage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/profile/profile.html"*/'<ion-header class="theme_background">\n  <div class="nav_header">\n      <button ion-button class="nav_btn floatLeft nav_menu" menuToggle></button>\n      <div class="nav_header_title floatLeft">\n         \n      </div>\n      <div class="clear"></div>\n  </div>\n</ion-header>\n<ion-content>\n  <div class="profile_wrapper">\n      <div class="profile_banner">\n          <ion-fab bottom right>\n              <button ion-fab class="theme_light" (click)="editprofile()"><ion-icon name="md-create"></ion-icon></button>\n          </ion-fab>\n          <ion-img [src]="user_info.image" class="profie_circle">\n        \n          </ion-img>\n          <h5>{{user_info.first_name}} {{user_info.last_name}}</h5>\n          <p>{{user_info.email}}</p>\n          <hr>\n      </div>\n      <div class="profile_content">\n          <ul>\n              <li class="menu1" (click)="changepass()">Change Password</li>\n             \n              <li class="menu2" (click)="logout()">Logout</li>\n          </ul>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=6.js.map