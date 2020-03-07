webpackJsonp([20],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apis_apis__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__apis_apis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__session_session__["a"]; });




//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-demond/add-demond.module": [
		286,
		19
	],
	"../pages/all-products/all-products.module": [
		287,
		18
	],
	"../pages/allchat/allchat.module": [
		288,
		17
	],
	"../pages/changepassword/changepassword.module": [
		289,
		16
	],
	"../pages/chatlist/chatlist.module": [
		290,
		15
	],
	"../pages/editprofile/editprofile.module": [
		291,
		14
	],
	"../pages/fav-list/fav-list.module": [
		292,
		13
	],
	"../pages/forgot/forgot.module": [
		293,
		12
	],
	"../pages/get-demond/get-demond.module": [
		294,
		11
	],
	"../pages/home/home.module": [
		295,
		10
	],
	"../pages/landing/landing.module": [
		296,
		9
	],
	"../pages/login/login.module": [
		297,
		8
	],
	"../pages/productdetails/productdetails.module": [
		298,
		7
	],
	"../pages/profile/profile.module": [
		299,
		6
	],
	"../pages/sendquery/sendquery.module": [
		300,
		5
	],
	"../pages/shop/shop.module": [
		301,
		4
	],
	"../pages/signup/signup.module": [
		302,
		3
	],
	"../pages/vendor-profile/vendor-profile.module": [
		303,
		2
	],
	"../pages/verified/verified.module": [
		304,
		1
	],
	"../pages/verify/verify.module": [
		305,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SessionProvider = /** @class */ (function () {
    function SessionProvider(http) {
        this.http = http;
        console.log('Hello SessionProvider Provider');
    }
    SessionProvider.prototype.set_session = function (name, indormation) {
        localStorage.setItem(name, JSON.stringify(indormation));
    };
    SessionProvider.prototype.get_session = function (name) {
        if (localStorage.getItem(name) != null && localStorage.getItem(name) != undefined && localStorage.getItem(name) != '') {
            return JSON.parse(localStorage.getItem(name));
        }
        return false;
    };
    SessionProvider.prototype.delete_session = function () {
        localStorage.clear();
    };
    SessionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SessionProvider);
    return SessionProvider;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_pipes__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_images_images__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_pipes__["c" /* NlbrPipe */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_pipes__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_pipes__["b" /* KeyboardAttachPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-demond/add-demond.module#AddDemondPageModule', name: 'AddDemondPage', segment: 'add-demond', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-products/all-products.module#AllProductsPageModule', name: 'AllProductsPage', segment: 'all-products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allchat/allchat.module#AllchatPageModule', name: 'AllchatPage', segment: 'allchat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatlist/chatlist.module#ChatlistPageModule', name: 'ChatlistPage', segment: 'chatlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fav-list/fav-list.module#FavListPageModule', name: 'FavListPage', segment: 'fav-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/get-demond/get-demond.module#GetDemondPageModule', name: 'GetDemondPage', segment: 'get-demond', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productdetails/productdetails.module#ProductdetailsPageModule', name: 'ProductdetailsPage', segment: 'productdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sendquery/sendquery.module#SendqueryPageModule', name: 'SendqueryPage', segment: 'sendquery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop/shop.module#ShopPageModule', name: 'ShopPage', segment: 'shop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendor-profile/vendor-profile.module#VendorProfilePageModule', name: 'VendorProfilePage', segment: 'vendor-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verified/verified.module#VerifiedPageModule', name: 'VerifiedPage', segment: 'verified', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_providers__["a" /* ApisProvider */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_pipes__["b" /* KeyboardAttachPipe */],
                __WEBPACK_IMPORTED_MODULE_9__directives_images_images__["a" /* ImagesDirective */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_6__providers_providers__["b" /* SessionProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApisProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ApisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApisProvider = /** @class */ (function () {
    function ApisProvider(event, http, session) {
        var _this = this;
        this.event = event;
        this.http = http;
        this.session = session;
        this.is_login = false;
        this.user_info = [];
        this.key = '';
        this.page_key = '?auth_key=';
        if (this.session.get_session('user_info')) {
            this.is_login = true;
            this.user_info = this.session.get_session('user_info');
            this.key = "?auth_key=" + this.user_info.auth_key;
            this.page_key = "?auth_key=" + this.user_info.auth_key;
        }
        this.event.subscribe('information', function (data) {
            _this.user_info = data;
            _this.key = "?auth_key=" + _this.user_info.auth_key;
            _this.page_key = "?auth_key=" + _this.user_info.auth_key;
        });
        this.event.subscribe('is_login', function (data) {
            _this.is_login = data;
        });
    }
    ApisProvider.prototype.top_ten_category = function () {
        var _this = this;
        var limit = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            limit[_i] = arguments[_i];
        }
        var limits = '';
        if (limit[0] == 25) {
            limits = "?limit=25";
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'top_ten_category' + limits).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.top_ten_vendor = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'top_ten_vender').subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.top_ten_feature = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'top_ten_featured' + _this.key).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.top_ten_sale = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'top_ten_sale' + _this.key).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.all_product = function (page, key) {
        var _this = this;
        var object = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            object[_i - 2] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'all_product/page:' + page + '?auth_key=' + key + '&search_key=' + object).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.page_product = function (object) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'all_product/page:' + object.page + object.auth_key + '&type=' + object.type + '&value=' + object.id).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.demond_product = function (object) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'demond_product/page:' + object.page + object.auth_key + '&type=' + object.type + '&value=' + object.id + "&is_my=" + object.is_my).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.saerch = function (object) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'all_product/page:' + object.page + '?auth_key=' + object.auth_key + '&search_key=' + object.search_key).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.do_fav = function (id) {
        var _this = this;
        var form = new FormData();
        form.append('auth_key', this.user_info.auth_key);
        form.append('product_id', id);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'do_fav', form).subscribe(function (data) {
                var body = data.message;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.get_fav = function (page, keys) {
        var _this = this;
        console.log('pankaj', keys);
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'fav_product/page:' + page + '?auth_key=' + keys).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.send_message = function (friend_id, product_id, type, message, keys) {
        var _this = this;
        var form = new FormData();
        form.append('auth_key', keys);
        form.append('product_id', product_id);
        form.append('receiver_id', friend_id);
        form.append('type', type);
        form.append('message', message);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'send_message', form).subscribe(function (data) {
                var body = data.message;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.get_message = function (receiver_id, product_id, page, keys) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'get_chat/page:' + page + '?auth_key=' + keys + "&receiver_id=" + receiver_id + "&product_id=" + product_id).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.last_chat = function (auth_key, page) {
        var _this = this;
        var name = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            name[_i - 2] = arguments[_i];
        }
        var serach = '';
        if (name[0]) {
            serach = name[0];
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'last_chat/page:' + page + "?auth_key=" + auth_key + "&name=" + serach).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.sub_category = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'get_sub_category?category_id=' + id).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.third_category = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'get_third_category?sub_category_id=' + id).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider.prototype.add_demond = function (data, auth_key, image) {
        var _this = this;
        var form = new FormData();
        form.append('auth_key', auth_key);
        form.append('name', data.name);
        form.append('image', image);
        form.append('min', data.min);
        form.append('max', data.max);
        form.append('category_id', data.category_id);
        form.append('sub_category_id', data.sub_category_id);
        form.append('third_level_category_id', data.third_category_id);
        form.append('detail', data.discription);
        form.append('qty', data.qty);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'create_demond', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    ApisProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__session_session__["a" /* SessionProvider */]])
    ], ApisProvider);
    return ApisProvider;
}());

//# sourceMappingURL=apis.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_global__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.login = function (data, device_token) {
        var _this = this;
        var form = new FormData();
        form.append('email', data.email);
        form.append('password', data.password);
        form.append('device_token', device_token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'login', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider.prototype.signup = function (data) {
        var _this = this;
        var form = new FormData();
        form.append('email', data.email);
        form.append('password', data.password);
        form.append('first_name', data.first_name);
        form.append('last_name', data.last_name);
        form.append('phone', data.phone);
        form.append('country_code', data.country_code);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'signup', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider.prototype.changepassword = function (old_password, new_password, auth_key) {
        var _this = this;
        var form = new FormData();
        form.append('new_password', new_password);
        form.append('old_password', old_password);
        form.append('auth_key', auth_key);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'change_password', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider.prototype.update_profile = function (user_info) {
        var _this = this;
        var form = new FormData();
        if (typeof user_info.photo === 'object') {
            form.append('photo', user_info.photo);
        }
        form.append('first_name', user_info.first_name);
        form.append('last_name', user_info.last_name);
        form.append('auth_key', user_info.auth_key);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'update_profile', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider.prototype.verifiy_otp = function (otp, auth_key, device_token) {
        var _this = this;
        var form = new FormData();
        form.append('otp', otp.otp);
        form.append('auth_key', auth_key);
        form.append('device_token', device_token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'verifiy_otp', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider.prototype.resend = function (auth_key) {
        var _this = this;
        var form = new FormData();
        form.append('auth_key', auth_key);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'resend_otp', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider.prototype.forgot_password = function (email) {
        var _this = this;
        var form = new FormData();
        form.append('email', email.email);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'forgot_password', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider.prototype.all_country = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'get_country').subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider.prototype.send_query = function (data) {
        var _this = this;
        var form = new FormData();
        form.append('auth_key', data.auth_key);
        form.append('message', data.message);
        form.append('vender_id', data.vender_id);
        form.append('table_type', data.table_type);
        form.append('table_id', data.table_id);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppCon */].url + 'send_query', form).subscribe(function (data) {
                var body = data.body;
                resolve(body);
            }, function (err) {
                var error = err.error.error_message;
                reject(error);
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(iab, toast, app, event, alertctrl, session, platform, statusBar, splashScreen) {
        var _this = this;
        this.iab = iab;
        this.toast = toast;
        this.app = app;
        this.event = event;
        this.alertctrl = alertctrl;
        this.session = session;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.Users = [];
        this.is_login = false;
        this.counter = 0;
        this.initializeApp();
        if (typeof this.session.get_session('user_info') === 'object') {
            this.Users = this.session.get_session('user_info');
            console.log(this.Users, typeof this.Users.id);
            if (typeof this.Users.id == 'undefined') {
                localStorage.clear();
                this.rootPage = 'HomePage';
            }
            else {
                this.rootPage = 'HomePage';
                this.is_login = true;
                if (this.Users.image.length == 0) {
                    this.Users.image = __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* AppCon */].defult_product_image;
                }
            }
        }
        else {
            this.rootPage = 'LandingPage';
        }
        this.event.subscribe('information', function (data) {
            _this.Users = JSON.parse(data);
            if (_this.Users.image.length == 0) {
                _this.Users.image = __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* AppCon */].defult_product_image;
            }
        });
        this.event.subscribe('is_login', function (data) {
            _this.is_login = data;
        });
        // android back button 
        platform.registerBackButtonAction(function () {
            var nav1 = app.getActiveNavs()[0];
            var activeView = nav1.getActive();
            if (activeView.name === "HomePage" || activeView.name === "VerifyPage" || activeView.name === "VerifiedPage") {
                if (_this.counter == 0) {
                    _this.counter++;
                    _this.toast_message('Press again to exit');
                    setTimeout(function () { _this.counter = 0; }, 3000);
                }
                else {
                    platform.exitApp();
                }
            }
            else {
                nav1.pop();
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.toast_message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });
        toast.present();
    };
    MyApp.prototype.openPage = function (page) {
        var number = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            number[_i - 1] = arguments[_i];
        }
        if (number[0] == 1) {
            this.nav.setRoot(page, { type: 1 });
        }
        else {
            this.nav.setRoot(page);
        }
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertctrl.create({
            title: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Yes, Log Out',
                    handler: function () {
                        localStorage.clear();
                        _this.session.delete_session();
                        _this.is_login = false;
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
    MyApp.prototype.term = function (url) {
        this.iab.create(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-content class="theme_background" padding>\n        <div class="sidemenu_wrapper">\n            <div class="profile_banner">\n                <img  *ngIf="is_login" class="profie_circle floatLeft" src="{{Users.image}}" />\n               \n                <h5 *ngIf="is_login" class="floatRight">{{Users.first_name}} {{Users.last_name}}</h5>\n                <!-- <hr> -->\n            </div>\n            <ul>\n                <li menuClose  (click)="openPage(\'HomePage\')">\n                    <ion-icon ios="ios-home" md="md-home"></ion-icon>Home\n                </li>\n                <li menuClose  (click)="openPage(\'ShopPage\')">\n                    <ion-icon ios="ios-cart" md="md-cart"></ion-icon>Shop\n                </li>\n                <li menuClose  (click)="openPage(\'ShopPage\',1)">\n                    <ion-icon ios="ios-add" md="md-flag"></ion-icon>Demand\n                </li>\n                <li menuClose *ngIf="is_login" (click)="openPage(\'GetDemondPage\')">\n                    <ion-icon name="ios-list-box-outline"></ion-icon>My Demands\n                </li>\n                <li menuClose *ngIf="is_login" (click)="openPage(\'FavListPage\')">\n                    <ion-icon name="ios-heart-outline"></ion-icon>Favourites\n                </li>\n                <li menuClose *ngIf="is_login" (click)="openPage(\'ChatlistPage\')">\n                    <ion-icon  ios="ios-send" md="md-send"></ion-icon>Chat\n                </li>\n                <li menuClose *ngIf="is_login" (click)="openPage(\'ProfilePage\')">\n                    <ion-icon name="ios-book-outline"></ion-icon>Profile\n                </li>\n                <li menuClose *ngIf="!is_login" (click)="openPage(\'LoginPage\')">\n                    <ion-icon ios="ios-log-in" md="md-log-in"></ion-icon>Login\n                </li>                    \n                <li menuClose *ngIf="!is_login" (click)="openPage(\'SignupPage\')">\n                    <ion-icon ios="ios-log-in" md="md-log-in"></ion-icon>Signup\n                </li>\n                <li menuClose *ngIf="is_login" (click)="logout()">\n                    <ion-icon ios="ios-log-in" md="md-log-in" ></ion-icon>Logout\n                </li>\n            </ul>\n        <div class="stat_link">\n            <ul>\n                <li menuClose  (click)="term(\'https://www.agrohypermarket.com/agro/help_center\')">\n                    <ion-icon ios="ios-mail" md="md-mail"></ion-icon>Contact Us\n                </li>\n                <li menuClose  (click)="term(\'https://www.agrohypermarket.com/agro/privacy_policy\')">\n                    <ion-icon ios="ios-finger-print" md="md-finger-print"></ion-icon>Privacy & Polices\n                </li>\n                <li menuClose  (click)="term(\'https://www.agrohypermarket.com/agro/Terms_&_Conditions\')">\n                    <ion-icon ios="ios-construct" md="md-construct"></ion-icon>T&C\n                </li>  \n            </ul>\n        </div>\n        </div>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]=" rootPage " #content swipeBackEnabled="false "></ion-nav>\n'/*ion-inline-end:"/Users/pankajvashisht/Documents/Projects/ionicApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nlbr_nlbr__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(284);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__nlbr_nlbr__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a"]; });




//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NlbrPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the NlbrPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var NlbrPipe = /** @class */ (function () {
    function NlbrPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    NlbrPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.replace(/\n/ig, '<br>');
    };
    NlbrPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'nlbr',
        })
    ], NlbrPipe);
    return NlbrPipe;
}());

//# sourceMappingURL=nlbr.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the KeyboardAttachPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var KeyboardAttachPipe = /** @class */ (function () {
    function KeyboardAttachPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    KeyboardAttachPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    KeyboardAttachPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keyboardAttach',
        })
    ], KeyboardAttachPipe);
    return KeyboardAttachPipe;
}());

//# sourceMappingURL=keyboard-attach.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FilterPipe.prototype.transform = function (items, searchText) {
        if (searchText == null)
            return items;
        return items.filter(function (items) {
            return items.is_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ImagesDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var ImagesDirective = /** @class */ (function () {
    function ImagesDirective() {
        this.defaultImage = 'assets/imgs/loader.gif';
    }
    ImagesDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.finalImage = this.defaultImage;
        this.downloadingImage = new Image();
        this.downloadingImage.onload = function () {
            console.log('image downloaded');
            _this.finalImage = _this.targetSource;
        };
        this.downloadingImage.src = this.targetSource;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('img-preloader'),
        __metadata("design:type", String)
    ], ImagesDirective.prototype, "targetSource", void 0);
    ImagesDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[img-preloader]',
            host: {
                '[attr.src]': 'finalImage'
            }
        })
    ], ImagesDirective);
    return ImagesDirective;
}());

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCon; });
var AppCon = {
    store: 'AHM',
    ContactEmail: 'sharmapankaj688@gmail.com',
    url: 'https://www.agrohypermarket.com/apis/',
    OneSignalAppID: 'e6ff67f5-ec5b-444c-b3e6-c7e1a939f3d0',
    GCM: '586724370404',
    consumerKey: 'ck_757033d97d8c2596009a235c737e9a3be5c65e9a',
    consumerSecret: 'cs_4b903a9259ea3e31ced46e3e82a98b8737b0d565',
    defult_product_image: 'https://www.agrohypermarket.com/placeholders/product_white.jpg',
    paypalSandboxClientID: '',
    paypalLiveClientID: '',
    paypalState: '',
    languages: [
        { id: 'en', title: 'English' },
        { id: 'id', title: 'Indonesian' },
        { id: 'fr', title: 'French' },
        { id: 'in', title: 'Hindi' },
        { id: 'cn', title: 'Chinese' }
    ],
    defaultLang: 'en'
};
//# sourceMappingURL=app.global.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map