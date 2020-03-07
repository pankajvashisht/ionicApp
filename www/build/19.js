webpackJsonp([19],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDemondPageModule", function() { return AddDemondPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_demond__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddDemondPageModule = /** @class */ (function () {
    function AddDemondPageModule() {
    }
    AddDemondPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_demond__["a" /* AddDemondPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_demond__["a" /* AddDemondPage */]),
            ],
        })
    ], AddDemondPageModule);
    return AddDemondPageModule;
}());

//# sourceMappingURL=add-demond.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDemondPage; });
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




var AddDemondPage = /** @class */ (function () {
    function AddDemondPage(loadingCtrl, session, toast, AdddemondForm, apis, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.session = session;
        this.toast = toast;
        this.AdddemondForm = AdddemondForm;
        this.apis = apis;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.main_category = [];
        this.sub_catgeory = [];
        this.third_category = [];
        this.img = "assets/imgs/logo.png";
        this.DemondForm = this.AdddemondForm.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            min: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            max: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            sub_category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            third_category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            discription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            qty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
        if (this.session.get_session('user_info')) {
            this.user_info = this.session.get_session('user_info');
        }
        else {
            this.navCtrl.push('HomePage');
        }
    }
    AddDemondPage.prototype.ionViewDidLoad = function () {
    };
    AddDemondPage.prototype.ngOnInit = function () {
        var _this = this;
        this.apis.top_ten_category(25).then(function (data) {
            _this.main_category = data;
        }).catch(function (err) {
        });
    };
    AddDemondPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AddDemondPage.prototype.getsub = function (id) {
        var _this = this;
        this.apis.sub_category(id).then(function (data) {
            _this.sub_catgeory = data;
            if (data.length > 0) {
                _this.DemondForm.value.sub_category_id = data[0].id;
            }
            else {
                _this.toast_message("No Sub Category Found");
            }
            // console.log(this.DemondForm.value);
        }).catch(function (err) {
        });
    };
    AddDemondPage.prototype.getthird = function (id) {
        var _this = this;
        this.apis.third_category(id).then(function (data) {
            if (data.length > 0) {
                _this.DemondForm.value.third_category_id = data[0].id;
            }
            else {
                _this.toast_message("No Third Level Category Found");
            }
            _this.third_category = data;
        }).catch(function (err) {
        });
    };
    AddDemondPage.prototype.onSelectFile = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.img = event.target.result;
            };
        }
    };
    AddDemondPage.prototype.submitSignup = function () {
        var _this = this;
        if (!this.selectedFile) {
            this.toast_message("Please Select Image");
            return false;
        }
        if (this.DemondForm.value.min > this.DemondForm.value.max) {
            this.toast_message("Max price should be maximum then min price");
            //this.toast_message(this.DemondForm.value.min+" "+this.DemondForm.value.max);
            return false;
        }
        var loading = this.loadingCtrl.create({
            content: 'Please Wait..'
        });
        loading.present();
        this.apis.add_demond(this.DemondForm.value, this.user_info.auth_key, this.selectedFile).then(function (data) {
            _this.toast_message("Demand Created Successfully");
            _this.navCtrl.push('GetDemondPage');
            loading.dismiss();
        }).catch(function (err) {
            _this.toast_message(err);
            loading.dismiss();
        });
    };
    AddDemondPage.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    AddDemondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-demond',template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/add-demond/add-demond.html"*/'<ion-header class="theme_background header header-md">\n    <div class="nav_header">\n        <button class="nav_btn nav_back floatLeft" (click)="back()">\n      </button>\n        <div class="nav_header_title floatLeft">\n            <h5>Add Your Demand</h5>\n        </div>\n        <div class="clear"></div>\n    </div>\n  </ion-header>\n<ion-content padding>\n        <div class="edit_profile_wrapper" padding>\n        <div class="edit_overlay"></div>  \n        <form [formGroup]="DemondForm" (ngSubmit)="submitSignup()">  \n                <div class="editprofile_banner">\n                        <ion-img [src]="img" class="edit_profile_circle">\n                    </ion-img>\n                    <div class="edit_overlay"></div>    \n                    <input type="file" accept="image/*" capture  id="image" (change)="onSelectFile($event)">\n                    </div>\n       \n        <div class="edit_profile_content">\n            <ion-item>\n                <ion-input [(ngModel)]="DemondForm.name" formControlName="name" required  placeholder="Title">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                \n\n                <ion-select [(ngModel)]="DemondForm.category_id" formControlName="category_id" required (ionChange)="getsub($event)" >\n                    \n                    <ion-option *ngFor="let a of main_category" value="{{a.id}}">{{a.name}}</ion-option>\n                  \n        </ion-select>\n            </ion-item>\n            <ion-item>\n                 \n               \n                <ion-select [(ngModel)]="DemondForm.sub_category_id" formControlName="sub_category_id" required (ionChange)="getthird($event)">\n                       \n                    <ion-option *ngFor="let a of sub_catgeory" value="{{a.id}}">{{a.name}}</ion-option>\n        </ion-select>\n            </ion-item> \n             <ion-item>\n           \n            <ion-select  [(ngModel)]="DemondForm.third_category_id" formControlName="third_category_id" required>\n                    <ion-option *ngFor="let a of third_category" value="{{a.id}}">{{a.name}}</ion-option> \n    </ion-select>\n</ion-item>\n<ion-item>\n        <ion-input type="number" min="1" [(ngModel)]="DemondForm.qty" formControlName="qty" required placeholder="Quanity">\n        </ion-input>\n    </ion-item>\n            <ion-item>\n                <ion-input type="number" [(ngModel)]="DemondForm.min" formControlName="min" required placeholder="Min Price">\n                </ion-input>\n                <ion-input type="number" [(ngModel)]="DemondForm.max" formControlName="max" required  placeholder="Max Price">\n                    </ion-input>\n            </ion-item>\n           \n                    <textarea name="" id="myInput" [(ngModel)]="DemondForm.discription" formControlName="discription" required cols="35" rows="5"></textarea>\n              \n        </div>\n         <button ion-button class="login_btn"  [disabled]="!DemondForm.valid" >SAVE</button>\n        </form>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/pages/add-demond/add-demond.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AddDemondPage);
    return AddDemondPage;
}());

//# sourceMappingURL=add-demond.js.map

/***/ })

});
//# sourceMappingURL=19.js.map