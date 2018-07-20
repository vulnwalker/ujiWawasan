webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JawabSoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the JawabSoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JawabSoalPage = /** @class */ (function () {
    function JawabSoalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JawabSoalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JawabSoalPage');
    };
    JawabSoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jawab-soal',template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\pages\jawab-soal\jawab-soal.html"*/'<!--\n  Generated template for the JawabSoalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar >\n    <ion-title>SOAL NO 3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div background-size class="default-background">\n      <ion-card background-size text-left \n      style="border-radius: 0% !important;\n             border: 5px solid #d4b186;\n             background: #737373 !important;\n             margin-top: 15% !important;\n             ">\n          <div gallery-description>\n              <h2 gallery-title text-wrap class="no-color-black">Apa Yang Disebut Metamorfosis?</h2>\n          </div>\n      </ion-card>\n\n      <div>\n        <ion-item class="no-bottom-border item" style="color: #777272;background-color: #c3efe0;">\n        <h1 text-center color="primary" class="timer-button timer-text">00:20:36</h1>\n        </ion-item>\n      </div>\n      \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\pages\jawab-soal\jawab-soal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], JawabSoalPage);
    return JawabSoalPage;
}());

//# sourceMappingURL=jawab-soal.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KategoriSoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soal_soal__ = __webpack_require__(104);
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
 * Generated class for the KategoriSoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KategoriSoalPage = /** @class */ (function () {
    function KategoriSoalPage(navCtrl, navParams, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.animateClass = { 'fade-in-right-item': true };
        this.animateClassbtn = { 'zoom-in': true };
    }
    KategoriSoalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KategoriSoalPage');
    };
    KategoriSoalPage.prototype.Soal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__soal_soal__["a" /* SoalPage */]);
    };
    KategoriSoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kategori-soal',template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\pages\kategori-soal\kategori-soal.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>KATEGORI SOAL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<!--Theme Wizard Big Image With Text -->\n<ion-slides #wizardSlider  pager="true" >\n    <ion-slide background-size padding style="\n    background-color: #00d0ff !important;\n    background-blend-mode: multiply;\n    background-image: url(\'https://iphonewalls.net/wp-content/uploads/2016/08/Forest%20River%20Crossing%20Mountain%20Fog%20iPhone%206+%20HD%20Wallpaper.jpg\')">\n        <!--Wizard Content -->\n        <div wizard-content>\n            <!--Wizard Subitem -->\n            <h1 wizard-title no-margin text-left [ngClass]="animateClass">Ilmu Pengetahuan Alam</h1>\n            <h3 wizard-subtitle no-margin text-left [ngClass]="animateClass">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</h3>\n            <!--Wizard Title -->\n           \n        </div>\n    </ion-slide>\n\n    <ion-slide background-size padding style="\n    background-color: #00d0ff !important;\n    background-blend-mode: multiply;\n    background-image: url(\'https://wallpaper-house.com/data/out/8/wallpaper2you_270126.jpg\')">\n        <!--Wizard Content -->\n        <div wizard-content>\n            <!--Wizard Subitem -->\n            <h1 wizard-title no-margin text-left [ngClass]="animateClass">Sejarah</h1>\n            <h3 wizard-subtitle no-margin text-left [ngClass]="animateClass">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</h3>\n            <!--Wizard Title -->\n           \n        </div>\n    </ion-slide>\n\n    <ion-slide background-size padding style="\n    background-color: #00d0ff !important;\n    background-blend-mode: multiply;\n    background-image: url(\'http://kb4images.com/images/library-wallpaper/36525040-library-wallpaper.jpg\')">\n        <!--Wizard Content -->\n        <div wizard-content>\n            <!--Wizard Subitem -->\n            <h1 wizard-title no-margin text-left [ngClass]="animateClass">Matematika</h1>\n            <h3 wizard-subtitle no-margin text-left [ngClass]="animateClass">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</h3>\n            <!--Wizard Title -->\n           \n        </div>\n    </ion-slide>\n\n    <ion-slide background-size padding style="\n    background-color: #00d0ff !important;\n    background-blend-mode: multiply;\n    background-image: url(\'http://mobw.org/wp-content/uploads/2017/04/Money-Wallpaper-Hd-Android-414x736.jpg\')">\n        <!--Wizard Content -->\n        <div wizard-content>\n            <!--Wizard Subitem -->\n            <h1 wizard-title no-margin text-left [ngClass]="animateClass">Politik</h1>\n            <h3 wizard-subtitle no-margin text-left [ngClass]="animateClass">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</h3>\n            <!--Wizard Title -->\n          \n        </div>\n    </ion-slide>\n\n</ion-slides>\n\n\n\n<!--Button section-->\n<div>\n    <button [ngClass]="animateClassbtn" (click)="Soal()" button-wizard text-center text-capitalize button-clear clear ion-button style="background: #33e9bc;">\n       Mulai Soal\n    </button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\pages\kategori-soal\kategori-soal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], KategoriSoalPage);
    return KategoriSoalPage;
}());

//# sourceMappingURL=kategori-soal.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jawab_soal_jawab_soal__ = __webpack_require__(102);
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
 * Generated class for the SoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SoalPage = /** @class */ (function () {
    function SoalPage(navCtrl, navParams, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.animateClass = { 'zoom-in': true };
    }
    SoalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SoalPage');
    };
    SoalPage.prototype.JawabSoal = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__jawab_soal_jawab_soal__["a" /* JawabSoalPage */]);
    };
    SoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-soal',template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\pages\soal\soal.html"*/'<!--\n  Generated template for the SoalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pilih Soal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card background-size text-left \n    style="background-image: url(\'https://iphonewalls.net/wp-content/uploads/2016/08/Forest%20River%20Crossing%20Mountain%20Fog%20iPhone%206+%20HD%20Wallpaper.jpg\');\n           border-radius: 0% !important; \n           border-bottom: 2px solid white;">\n        <div gallery-description>\n\n            <h2 gallery-title text-wrap>Ilmu Pengetahuan Alam</h2>\n            <p gallery-subtitle>Total Point : 400, Dari 15 Soal </p>\n        </div>\n    </ion-card>\n\n    <div background-size class="default-background">\n        <ion-grid>\n            <ion-row no-padding>\n            \n    \n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalSelesai.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">1</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalSelesai.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">2</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" (click)="JawabSoal()">\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soal.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">3</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">4</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n                \n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">5</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">6</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">7</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">8</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n                \n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">9</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">10</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">11</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n                \n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">12</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">13</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">14</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n                \n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 [ngClass]="animateClass" >\n                    <ion-card background-size text-left style="border: 1px solid white;min-height: 105px;height:  105px;max-height: 105px;">\n                      <img src="assets/images/soalDisable.png">\n                        <div gallery-description>\n                            <h2 gallery-title text-wrap class="color-black">15</h2>\n                        </div>\n                    </ion-card>\n                </ion-col>\n                \n\n    \n            </ion-row>\n        </ion-grid>\n        </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\pages\soal\soal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], SoalPage);
    return SoalPage;
}());

//# sourceMappingURL=soal.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(156);
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
 * Generated class for the SplashScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashScreenPage = /** @class */ (function () {
    function SplashScreenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SplashScreenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var TIME_IN_MS = 10000;
        var hideFooterTimeout = setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }, TIME_IN_MS);
        console.log('ionViewDidLoad SplashScreenPage');
    };
    SplashScreenPage.prototype.ngOnChanges = function (changes) {
        clearInterval(this.timer);
        this.executeEvents();
    };
    SplashScreenPage.prototype.getData = function () {
        return this.data;
    };
    SplashScreenPage.prototype.getEvents = function () {
        return this.events;
    };
    SplashScreenPage.prototype.executeEvents = function () {
        var duration = (this.getData() && this.getData().duration) ? this.getData().duration : 10000;
        var events = null;
        if (this.getEvents()) {
            events = this.getEvents()['onRedirect'];
        }
        this.timer = setTimeout(function () {
            if (events) {
                events();
            }
        }, duration);
    };
    SplashScreenPage.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Object)
    ], SplashScreenPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('events'),
        __metadata("design:type", Object)
    ], SplashScreenPage.prototype, "events", void 0);
    SplashScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash-screen',template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\pages\splash-screen\splash-screen.html"*/'<!--\n  Generated template for the SplashScreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <div  background-size id="splash-background-image">\n    <img splash-screen src="http://www.freeapplewallpapers.com/wp-content/uploads/2013/08/Red-Flower-Tree-Forest.jpg" />\n      <img logo src="assets/images/logo/5.png" />\n      <h1 header-title text-wrap>Welcome To UjiWawasan</h1>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\pages\splash-screen\splash-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SplashScreenPage);
    return SplashScreenPage;
}());

//# sourceMappingURL=splash-screen.js.map

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

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/jawab-soal/jawab-soal.module": [
		281,
		3
	],
	"../pages/kategori-soal/kategori-soal.module": [
		282,
		2
	],
	"../pages/soal/soal.module": [
		283,
		1
	],
	"../pages/splash-screen/splash-screen.module": [
		284,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import  'rxjs/add/operator/map';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(splashScreen, storage, toastCtrl, navCtrl, navParams, appCtrl, http) {
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.type = 'password';
        this.showPass = false;
        // dataInstansi : string;
        // // url :string;
        this.data = {};
        this.gender = "f";
        this.data.username = '';
        this.data.password = '';
        this.data.response = '';
        this.http = http;
        this.splashScreen.hide();
    }
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage.prototype.login = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // ionViewDidLoad(){
    //   this.loadUser();
    // }
    // loadUser(){
    //     this.http.get('http://taufantritama.com/instansi/dataInstansi.php')
    //     .map(res => res.json())
    //     .subscribe(dataInstansi => {
    //       this.dataInstansi = dataInstansi.result;
    //       console.log(dataInstansi.result);
    //     });
    // }
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        var link = 'http://api.rm-rf.studio/auth';
        var myData = JSON.stringify({ email: this.data.username, password: this.data.password });
        this.http.post(link, myData)
            .subscribe(function (data) {
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            var obj = JSON.parse(data["_body"]);
            if (obj.err == "") {
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                _this.storage.ready().then(function () {
                    _this.storage.set('Email', obj.userSession);
                });
                localStorage.setItem("Email", _this.data.username);
                console.log("session!" + localStorage.getItem("Email"));
            }
            else {
                _this.presentToast("Gagal Login");
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LoginPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\pages\login\login.html"*/'<ion-content has-header>\n  <ion-grid >\n      <ion-row padding-horizontal align-self-center>\n          <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n              <!--DESCRIPTION-->\n              <ion-item no-lines no-padding>\n                  <h2 ion-text color="dark" login-subtitle text-wrap>Welcome</h2>\n                  <h1 no-margin login-title text-wrap>Login to your account</h1>\n                  <!--LOGO-->\n                  <img src="assets/images/logo/5.png" >\n              </ion-item>\n          </ion-col>\n          <ion-col align-self-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n              <!---Input field username-->\n              <ion-item no-padding transparent>\n                  <ion-label color="dark" stacked>Email</ion-label>\n                  <ion-input required placeholder="Enter your Email" type="text" [(ngModel)]="data.username"></ion-input>\n              </ion-item>\n              <!---Input field password-->\n              <ion-item no-padding transparent>\n                  <ion-label color="dark" stacked>PASSWORD</ion-label>\n                  <ion-input required placeholder="Enter your Password" type="password" [(ngModel)]="data.password"></ion-input>\n              </ion-item>\n              <!---Login button-->\n              <button ion-button button-clear float-right clear text-capitalize (click)="onEvent(\'onRegister\')">Register </button>\n              <!---Register button-->\n              <button ion-button button-clear clear float-right text-capitalize (click)="submitLogin()">Login</button>\n          </ion-col>\n\n\n\n          <!---Share Section-->\n          <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 social>\n            <h2 ion-text color="dark" login-subtitle text-wrap style="\n            text-align:  center;\n            padding-right:  0px !important;\n            font-size: 15px !important;\n              ">------ LogIn With ------</h2>\n            <!---Facebook button-->\n              <button style="background: #0072ff;" ion-button text-capitalize default-button color="facebook" (click)="onEvent(\'onFacebook\')">Facebook</button>\n              <!---Twitter button-->\n              <!---Google button-->\n              <button style="background: #f93d3d;" ion-button text-capitalize default-button color="google" (click)="onEvent(\'onGoogle\')">Google</button>\n              <!---Pinterest button-->\n          </ion-col>\n          <!---End Share Section-->\n      </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kategori_soal_kategori_soal__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.animateClass = { 'zoom-in': true };
    }
    HomePage.prototype.Challenge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kategori_soal_kategori_soal__["a" /* KategoriSoalPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\pages\home\home.html"*/'<!--Fist Screen-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n    <ion-icon class="icon-menu" name="menu"></ion-icon>\n  </button>\n      <ion-title><h4 >UJI WAWASAN</h4></ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Fist Screen Content-->\n<ion-content>\n    <ion-card background-size text-left \n    style="background-image: url(\'https://img00.deviantart.net/f963/i/2016/135/2/1/space_flat_wallpaper_by_trumpjunior-da2l9y8.png\');\n           border-radius: 0% !important; \n           border-bottom: 2px solid white;">\n        <div gallery-description>\n            <p gallery-subtitle>point</p>\n            <h2 gallery-title text-wrap>ASDASDASD</h2>\n        </div>\n    </ion-card>\n\n    <div background-size class="default-background">\n    <ion-grid>\n        <ion-row no-padding>\n        \n          <ion-col col-12 col-sm-6 col-md-12 col-lg-4 col-xl-3 (click)="Challenge()" [ngClass]="animateClass">\n                <ion-card background-size text-left \n                style="background-image: url(\'assets/images/start.gif\');border: 1px solid white;">\n                    <div gallery-description>\n                    </div>\n                </ion-card>\n            </ion-col>\n\n            <ion-col col-6 col-sm-3 col-md-6 col-lg-4 col-xl-3 [ngClass]="animateClass" >\n                <ion-card background-size text-left \n                style="background-image: url(\'assets/images/user.png\');border: 1px solid white;">\n                    <div gallery-description>\n                        <h2 gallery-title text-wrap class="color-black">Profile</h2>\n                    </div>\n                </ion-card>\n            </ion-col>\n\n            <ion-col col-6 col-sm-3 col-md-6 col-lg-4 col-xl-3 [ngClass]="animateClass" >\n                <ion-card background-size text-left \n                style="background-image: url(\'assets/images/gift.png\');border: 1px solid white;">\n                    <div gallery-description>\n                        <h2 gallery-title text-wrap class="color-black">Event</h2>\n                    </div>\n                </ion-card>\n            </ion-col>\n\n\n            <ion-col col-6 col-sm-3 col-md-6 col-lg-4 col-xl-3 [ngClass]="animateClass" >\n                <ion-card background-size text-left \n                style="background-image: url(\'assets/images/poin.png\');border: 1px solid white;">\n                    <div gallery-description>\n                        <h2 gallery-title text-wrap class="color-black">Point</h2>\n                    </div>\n                </ion-card>\n            </ion-col>\n\n            <ion-col col-6 col-sm-3 col-md-6 col-lg-4 col-xl-3 [ngClass]="animateClass" >\n                <ion-card background-size text-left \n                style="background-image: url(\'assets/images/history.png\');border: 1px solid white;">\n                    <div gallery-description>\n                        <h2 gallery-title text-wrap class="color-black">History</h2>\n                    </div>\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_screen_splash_screen__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_kategori_soal_kategori_soal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_soal_soal__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_jawab_soal_jawab_soal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_timer_timer__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(280);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_kategori_soal_kategori_soal__["a" /* KategoriSoalPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_soal_soal__["a" /* SoalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_splash_screen_splash_screen__["a" /* SplashScreenPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_jawab_soal_jawab_soal__["a" /* JawabSoalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_timer_timer__["a" /* TimerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/jawab-soal/jawab-soal.module#JawabSoalPageModule', name: 'JawabSoalPage', segment: 'jawab-soal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kategori-soal/kategori-soal.module#KategoriSoalPageModule', name: 'KategoriSoalPage', segment: 'kategori-soal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/soal/soal.module#SoalPageModule', name: 'SoalPage', segment: 'soal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash-screen/splash-screen.module#SplashScreenPageModule', name: 'SplashScreenPage', segment: 'splash-screen', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_kategori_soal_kategori_soal__["a" /* KategoriSoalPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_soal_soal__["a" /* SoalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_splash_screen_splash_screen__["a" /* SplashScreenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_jawab_soal_jawab_soal__["a" /* JawabSoalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_screen_splash_screen__ = __webpack_require__(105);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_splash_screen_splash_screen__["a" /* SplashScreenPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
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
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n      <div header-background-image padding \n        style="background-image:url(\'https://www.planwallpaper.com/static/images/3865967-wallpaper-full-hd_XNgM7er.jpg\'); \n              padding-top: 15%;\n      ">\n       <h2 ion-text color="light" header-title>Taufan Tritama Putra</h2>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>\n      </div>\n  </ion-header>\n\n  <ion-content style="font-family: \'Lato\', sans-serif;">\n    <ion-list no-margin>\n        <button menuClose ion-item item-title main-menu no-lines border>\n          <ion-icon icon-small item-left>\n            <i class="lnr lnr-user"></i>\n          </ion-icon>\n            <ion-label class="label label-md" style="color:#1f2056;">\n              My Profile\n            </ion-label>\n        </button>\n    </ion-list>\n\n    <ion-list no-margin>\n      <button menuClose ion-item item-title main-menu no-lines border>\n        <ion-icon icon-small item-left>\n          <i class="lnr lnr-star"></i>\n        </ion-icon>\n          <ion-label class="label label-md" style="color:#1f2056;">\n            My Point\n          </ion-label>\n          <ion-badge item-end class="badge-dark">1.000.000</ion-badge>\n      </button>\n  </ion-list>\n\n  <ion-list no-margin>\n      <button menuClose ion-item item-title main-menu no-lines border>\n        <ion-icon icon-small item-left>\n          <i class="lnr lnr-gift"></i>\n        </ion-icon>\n          <ion-label class="label label-md" style="color:#1f2056;">\n           Event\n          </ion-label>\n      </button>\n  </ion-list>\n\n  <ion-list no-margin>\n      <button menuClose ion-item item-title main-menu no-lines border>\n        <ion-icon icon-small item-left>\n          <i class="lnr lnr-cog"></i>\n        </ion-icon>\n          <ion-label class="label label-md" style="color:#1f2056;">\n            Settings\n          </ion-label>\n      </button>\n  </ion-list>\n\n\n  <ion-list no-margin>\n      <button menuClose ion-item item-title main-menu no-lines border>\n        <ion-icon icon-small item-left>\n          <i class="lnr lnr-exit"></i>\n        </ion-icon>\n          <ion-label class="label label-md" style="color:#1f2056;">\n            Sign Out\n          </ion-label>\n      </button>\n  </ion-list>\n\n</ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n<!---Settings Main Header-->\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
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
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        console.log('Hello TimerComponent Component');
        this.text = 'Hello World';
    }
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timer',template:/*ion-inline-start:"C:\Users\FUJIN\UjiWawasans\src\components\timer\timer.html"*/'<!-- Generated template for the TimerComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"C:\Users\FUJIN\UjiWawasans\src\components\timer\timer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map