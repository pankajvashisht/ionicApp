webpackJsonp([17],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllchatPageModule", function() { return AllchatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allchat__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllchatPageModule = /** @class */ (function () {
    function AllchatPageModule() {
    }
    AllchatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__allchat__["a" /* AllchatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__allchat__["a" /* AllchatPage */]),
            ],
        })
    ], AllchatPageModule);
    return AllchatPageModule;
}());

//# sourceMappingURL=allchat.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(51);
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




/**
 * Generated class for the AllchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllchatPage = /** @class */ (function () {
    function AllchatPage(api, toastCtrl, session, navCtrl, navParams) {
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.session = session;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.all_message = [];
        this.type = '0';
        this.user_info = [];
        this.page = 1;
        this.displaychat = 'chat';
        if (this.navParams.get('product_id')) {
            this.product_id = this.navParams.get('product_id');
            this.friend_id = this.navParams.get('user_id');
        }
        else {
            this.navCtrl.push('HomePage');
        }
        if (this.session.get_session('user_info')) {
            this.user_info = this.session.get_session('user_info');
        }
        else {
            this.navCtrl.push('HomePage');
        }
        if (this.navParams.get('message')) {
            //message
            console.log(this.navParams.get('message'));
            this.all_message = this.navParams.get('message');
            this.total_record = this.all_message.length;
        }
        else {
            this.get_message();
        }
        if (this.navParams.get('product_name')) {
            console.log(this.navParams.get('product_name'));
            this.displaychat = this.navParams.get('product_name');
        }
        //this.get_message();
    }
    AllchatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllchatPage');
    };
    AllchatPage.prototype.ngAfterViewChecked = function () {
        //this.scrollBottom();
    };
    AllchatPage.prototype.get_message = function () {
        var _this = this;
        this.api.get_message(this.friend_id, this.product_id, this.page, this.user_info['auth_key']).then(function (data) {
            _this.all_message = data;
            console.log(_this.all_message);
            _this.is_show = false;
            _this.total_record = _this.all_message.length;
            console.log(_this.total_record);
        }).catch(function (err) {
            var toast = _this.toastCtrl.create({
                message: err,
                duration: 3000,
                position: 'buttom'
            });
            toast.present();
        });
    };
    AllchatPage.prototype.scrollBottom = function () {
        this.content.resize();
        this.content.scrollTo(0, this.content.scrollHeight, 350);
    };
    AllchatPage.prototype.send_message = function () {
        if (this.message == '' || this.message == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please Enter the Message",
                duration: 3000,
                position: 'buttom'
            });
            toast.present();
            return;
        }
        var object = {
            'is_send': 1,
            'message': this.message,
            'type': 0,
            'created': new Date().getTime() / 1000,
            'sender_id': this.user_info.id,
            'product_id': this.product_id,
            'receiver_id': this.friend_id,
            'another_user': ''
        };
        this.all_message.push(object);
        this.scrollBottom();
        this.message = '';
        this.api.send_message(this.friend_id, this.product_id, this.type, object.message, this.user_info['auth_key']);
    };
    AllchatPage.prototype.time_ago = function (previous) {
        var current = new Date().getTime();
        previous = previous * 1000;
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        }
        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }
        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + ' days ago';
        }
        else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + ' months ago';
        }
        else {
            return Math.round(elapsed / msPerYear) + ' years ago';
        }
    };
    AllchatPage.prototype.string_message = function (message) {
        return atob(message);
    };
    AllchatPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AllchatPage.prototype.pagination = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.api.get_message(this.friend_id, this.product_id, this.page, this.user_info['auth_key']).then(function (data) {
            _this.total_record = data.length;
            for (var i = 0; i < data.length; i++) {
                _this.all_message.unshift(data[i]);
            }
            infiniteScroll.complete();
        }).catch(function (error) {
            // this.toast_message("No For Product");
            _this.total_record = 0;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["c" /* Content */])
    ], AllchatPage.prototype, "content", void 0);
    AllchatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allchat',template:/*ion-inline-start:"C:\xampp\htdocs\agrohyperMarket\src\pages\allchat\allchat.html"*/'\n<ion-header>\n  <div class="nav_header nav_white_header">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n    </button>\n      <div class="nav_header_title floatLeft">\n          <h5>{{(displaychat.length>15)?displaychat.substring(0,15)+\'....\':displaychat}}</h5>\n      </div>\n      \n      <div class="clear"></div>\n  </div>\n</ion-header>\n\n\n<ion-content>\n  <ion-infinite-scroll *ngIf="total_record>8" (ionInfinite)="pagination($event)" position="top">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n    <div class="wrapper text-center h-full" layout vertical center center-center *ngIf="all_message.length == 0">\n      <div>\n        <div class="m-b">\n\n          <div class="text-lg no-product">  <ion-icon class="nochaticon" name="chatbubbles"></ion-icon> <br><p>No Chat Yet</p></div>\n          \n        </div>\n      \n       \n      </div>\n    </div>\n  \n    <div class="chat-list" *ngIf="all_message.length">\n      <div class="chat-item" *ngFor="let singel of all_message" [ngClass]="{\'me\': singel.sender_id==user_info.id}">\n        <div class="chat-timestamp">\n          {{time_ago(singel.created)}}\n        </div>\n  \n        <div class="chat-item-content">\n        \n          \n          \n          <div class="chat-item-bubble" [ngClass]="{\'bubble-image\': singel.type == \'1\'}">\n            <i class="icon-tail"></i>\n            <div class="chat-body" *ngIf="singel.type == \'0\'" [innerHtml]="singel.message "></div>\n             <img [src]="singel.message" *ngIf="singel.type == \'1\'"> \n          </div>\n        \n        </div>\n  \n        \n      </div>\n    </div>\n    \n</ion-content>\n\n<ion-footer no-border >\n  \n\n  <ion-toolbar class="has-elastic-input giphy-input" >\n    <ion-buttons left align-self-bottom class="stick-bottom">\n      <!-- <button ion-button small class="button-gif" (click)="toggleGiphy()">\n        <ion-icon ios="ios-attach" md="md-attach"></ion-icon>\n      </button> -->\n    </ion-buttons>\n    <ion-textarea  fz-elastic [(ngModel)]="message" placeholder="Type a message.." style="border-color: black !important;"></ion-textarea>\n    <ion-buttons right align-self-bottom class="stick-bottom">\n      \n      <button ion-button small class="" style="font-size: 30px;"  (tap)="send_message()">\n        <ion-icon  class=""  name="send" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\agrohyperMarket\src\pages\allchat\allchat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AllchatPage);
    return AllchatPage;
}());

//# sourceMappingURL=allchat.js.map

/***/ })

});
//# sourceMappingURL=17.js.map