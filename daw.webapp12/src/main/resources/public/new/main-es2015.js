(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/advertisement/advertisement.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.ts ***!
  \**********************************************************/
/*! exports provided: AdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementComponent", function() { return AdvertisementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_advertisement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/advertisement.service */ "./src/app/service/advertisement.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











const _c0 = function (a1) { return ["/AllProperties", a1]; };
function AdvertisementComponent_mat_nav_list_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const advertisement_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, advertisement_r33.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", advertisement_r33.type, " ");
} }
function AdvertisementComponent_mat_nav_list_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvertisementComponent_mat_nav_list_8_a_1_Template, 2, 4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.advertisements);
} }
const _c1 = function () { return { cursor: "auto" }; };
function AdvertisementComponent_mat_nav_list_9_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const advertisement_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", advertisement_r35.type, " ");
} }
function AdvertisementComponent_mat_nav_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvertisementComponent_mat_nav_list_9_mat_list_item_1_Template, 2, 3, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.advertisements);
} }
function AdvertisementComponent_div_10_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertisementComponent_div_10_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.newAdvertisement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertisementComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdvertisementComponent_div_10_button_2_Template, 4, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.loginService.isLogged);
} }
class AdvertisementComponent {
    constructor(router, service, loginService) {
        this.router = router;
        this.service = service;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.service.getAdvertisements().subscribe(advertisements => this.advertisements = advertisements, error => console.log(error));
    }
    newAdvertisement() {
        this.router.navigate(['/advertisement/new']);
    }
}
AdvertisementComponent.ɵfac = function AdvertisementComponent_Factory(t) { return new (t || AdvertisementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_advertisement_service__WEBPACK_IMPORTED_MODULE_2__["AdvertisementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
AdvertisementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvertisementComponent, selectors: [["advertisements"]], decls: 11, vars: 3, consts: [["layout", "row", "layout-align", "start center"], ["flex", ""], [4, "ngIf"], ["layout", "column", "layout-align", "center end", 4, "ngIf"], ["mat-list-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "routerLink"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle"], ["layout", "column", "layout-align", "center end"], ["inset", "true"], ["mat-raised-button", "", "color", "accent", "class", "push-top-sm", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 1, "push-top-sm", 3, "click"]], template: function AdvertisementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Advertisements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdvertisementComponent_mat_nav_list_8_Template, 2, 1, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdvertisementComponent_mat_nav_list_9_Template, 2, 1, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdvertisementComponent_div_10_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginService.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.isLogged && ctx.loginService.isAdmin);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertisementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'advertisements',
                templateUrl: 'advertisement.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_advertisement_service__WEBPACK_IMPORTED_MODULE_2__["AdvertisementService"] }, { type: _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covalent_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @covalent/core/common */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _covalent_core_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @covalent/core/media */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-media.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @covalent/core/layout */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-layout.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












class AppComponent {
    constructor(media, dialog, _changeDetectorRef, _iconRegistry, _domSanitizer) {
        this.media = media;
        this.dialog = dialog;
        this._changeDetectorRef = _changeDetectorRef;
        this._iconRegistry = _iconRegistry;
        this._domSanitizer = _domSanitizer;
        this._iconRegistry.addSvgIconInNamespace('assets', 'covalent', this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            this.mode = "Production";
        }
        else {
            this.mode = "Development";
        }
    }
    ngAfterViewInit() {
        // broadcast to all listener observables when loading the page
        this.media.broadcast();
        this._changeDetectorRef.detectChanges();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_media__WEBPACK_IMPORTED_MODULE_3__["TdMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 6, consts: [[3, "mode", "sidenavWidth"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "myHeader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.media.registerQuery("gt-sm")) ? "side" : "push")("sidenavWidth", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.media.registerQuery("gt-xs")) ? "240px" : "100%");
    } }, directives: [_covalent_core_layout__WEBPACK_IMPORTED_MODULE_7__["TdLayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".example-icon[_ngcontent-%COMP%] {\r\n    padding: 0 14px;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */", "@charset \"UTF-8\";\r\n\r\n\r\n\r\n.animated[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.animated-fast[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: .2s;\r\n  animation-duration: .2s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.ftco-animated[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: .5s;\r\n  animation-duration: .5s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.animated.infinite[_ngcontent-%COMP%] {\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.animated.hinge[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: 2s;\r\n  animation-duration: 2s;\r\n}\r\n\r\n.animated.bounceIn[_ngcontent-%COMP%], .animated.bounceOut[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: .75s;\r\n  animation-duration: .75s;\r\n}\r\n\r\n.animated.flipOutX[_ngcontent-%COMP%], .animated.flipOutY[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: .75s;\r\n  animation-duration: .75s;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n  from, 20%, 53%, 80%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    transform: translate3d(0,0,0);\r\n  }\r\n\r\n  40%, 43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    transform: translate3d(0, -30px, 0);\r\n  }\r\n\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    transform: translate3d(0, -15px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0,-4px,0);\r\n  }\r\n}\r\n\r\n@keyframes bounce {\r\n  from, 20%, 53%, 80%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    transform: translate3d(0,0,0);\r\n  }\r\n\r\n  40%, 43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    transform: translate3d(0, -30px, 0);\r\n  }\r\n\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    transform: translate3d(0, -15px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0,-4px,0);\r\n  }\r\n}\r\n\r\n.bounce[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounce;\r\n  animation-name: bounce;\r\n  transform-origin: center bottom;\r\n}\r\n\r\n@-webkit-keyframes flash {\r\n  from, 50%, to {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%, 75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flash {\r\n  from, 50%, to {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%, 75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flash[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: flash;\r\n  animation-name: flash;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes pulse {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.pulse[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: pulse;\r\n  animation-name: pulse;\r\n}\r\n\r\n@-webkit-keyframes rubberBand {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    transform: scale3d(.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    transform: scale3d(1.05, .95, 1);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes rubberBand {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    transform: scale3d(.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    transform: scale3d(1.05, .95, 1);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.rubberBand[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rubberBand;\r\n  animation-name: rubberBand;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  from, to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  10%, 30%, 50%, 70%, 90% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  20%, 40%, 60%, 80% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  from, to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  10%, 30%, 50%, 70%, 90% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  20%, 40%, 60%, 80% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n}\r\n\r\n.shake[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: shake;\r\n  animation-name: shake;\r\n}\r\n\r\n@-webkit-keyframes swing {\r\n  20% {\r\n    transform: rotate3d(0, 0, 1, 15deg);\r\n  }\r\n\r\n  40% {\r\n    transform: rotate3d(0, 0, 1, -10deg);\r\n  }\r\n\r\n  60% {\r\n    transform: rotate3d(0, 0, 1, 5deg);\r\n  }\r\n\r\n  80% {\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n@keyframes swing {\r\n  20% {\r\n    transform: rotate3d(0, 0, 1, 15deg);\r\n  }\r\n\r\n  40% {\r\n    transform: rotate3d(0, 0, 1, -10deg);\r\n  }\r\n\r\n  60% {\r\n    transform: rotate3d(0, 0, 1, 5deg);\r\n  }\r\n\r\n  80% {\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n.swing[_ngcontent-%COMP%] {\r\n  transform-origin: top center;\r\n  -webkit-animation-name: swing;\r\n  animation-name: swing;\r\n}\r\n\r\n@-webkit-keyframes tada {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  10%, 20% {\r\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  30%, 50%, 70%, 90% {\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  40%, 60%, 80% {\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes tada {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  10%, 20% {\r\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  30%, 50%, 70%, 90% {\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  40%, 60%, 80% {\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.tada[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: tada;\r\n  animation-name: tada;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes wobble {\r\n  from {\r\n    transform: none;\r\n  }\r\n\r\n  15% {\r\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  30% {\r\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  45% {\r\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  60% {\r\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes wobble {\r\n  from {\r\n    transform: none;\r\n  }\r\n\r\n  15% {\r\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  30% {\r\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  45% {\r\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  60% {\r\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.wobble[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: wobble;\r\n  animation-name: wobble;\r\n}\r\n\r\n@-webkit-keyframes jello {\r\n  from, 11.1%, to {\r\n    transform: none;\r\n  }\r\n\r\n  22.2% {\r\n    transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n\r\n@keyframes jello {\r\n  from, 11.1%, to {\r\n    transform: none;\r\n  }\r\n\r\n  22.2% {\r\n    transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n\r\n.jello[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: jello;\r\n  animation-name: jello;\r\n  transform-origin: center;\r\n}\r\n\r\n@-webkit-keyframes bounceIn {\r\n  from, 20%, 40%, 60%, 80%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  20% {\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  40% {\r\n    transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(1.03, 1.03, 1.03);\r\n  }\r\n\r\n  80% {\r\n    transform: scale3d(.97, .97, .97);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes bounceIn {\r\n  from, 20%, 40%, 60%, 80%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  20% {\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  40% {\r\n    transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(1.03, 1.03, 1.03);\r\n  }\r\n\r\n  80% {\r\n    transform: scale3d(.97, .97, .97);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.bounceIn[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceIn;\r\n  animation-name: bounceIn;\r\n}\r\n\r\n@-webkit-keyframes bounceInDown {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 25px, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes bounceInDown {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 25px, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceInDown;\r\n  animation-name: bounceInDown;\r\n}\r\n\r\n@-webkit-keyframes bounceInLeft {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(-3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes bounceInLeft {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(-3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceInLeft;\r\n  animation-name: bounceInLeft;\r\n}\r\n\r\n@-webkit-keyframes bounceInRight {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(-25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes bounceInRight {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(-25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceInRight;\r\n  animation-name: bounceInRight;\r\n}\r\n\r\n@-webkit-keyframes bounceInUp {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0, -5px, 0);\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceInUp {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0, -5px, 0);\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceInUp[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceInUp;\r\n  animation-name: bounceInUp;\r\n}\r\n\r\n@-webkit-keyframes bounceOut {\r\n  20% {\r\n    transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  50%, 55% {\r\n    opacity: 1;\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n}\r\n\r\n@keyframes bounceOut {\r\n  20% {\r\n    transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  50%, 55% {\r\n    opacity: 1;\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n}\r\n\r\n.bounceOut[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceOut;\r\n  animation-name: bounceOut;\r\n}\r\n\r\n@-webkit-keyframes bounceOutDown {\r\n  20% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutDown {\r\n  20% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceOutDown;\r\n  animation-name: bounceOutDown;\r\n}\r\n\r\n@-webkit-keyframes bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceOutLeft;\r\n  animation-name: bounceOutLeft;\r\n}\r\n\r\n@-webkit-keyframes bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(-20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(-20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceOutRight;\r\n  animation-name: bounceOutRight;\r\n}\r\n\r\n@-webkit-keyframes bounceOutUp {\r\n  20% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutUp {\r\n  20% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutUp[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: bounceOutUp;\r\n  animation-name: bounceOutUp;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: scale(0.95);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: scale(1.0);\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: scale(0.95);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: scale(1.0);\r\n  }\r\n}\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeIn;\r\n  animation-name: fadeIn;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(0, -50px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(0, -50px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n}\r\n\r\n@-webkit-keyframes fadeInDownBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDownBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDownBig[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInDownBig;\r\n  animation-name: fadeInDownBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInLeft {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(-50px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(-50px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInLeft;\r\n  animation-name: fadeInLeft;\r\n}\r\n\r\n@-webkit-keyframes fadeInLeftBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInLeftBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInLeftBig[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInLeftBig;\r\n  animation-name: fadeInLeftBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInRight {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(50px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(50px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInRight;\r\n  animation-name: fadeInRight;\r\n}\r\n\r\n@-webkit-keyframes fadeInRightBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInRightBig[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInRightBig;\r\n  animation-name: fadeInRightBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUp[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInUp;\r\n  animation-name: fadeInUp;\r\n}\r\n\r\n@-webkit-keyframes fadeInUpMenu {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUpMenu {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUpMenu[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInUpMenu;\r\n  animation-name: fadeInUpMenu;\r\n}\r\n\r\n@-webkit-keyframes fadeInUpBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUpBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUpBig[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInUpBig;\r\n  animation-name: fadeInUpBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.fadeOut[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOut;\r\n  animation-name: fadeOut;\r\n}\r\n\r\n@-webkit-keyframes fadeOutDown {\r\n  from {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutDown {\r\n  from {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOutDown;\r\n  animation-name: fadeOutDown;\r\n}\r\n\r\n@-webkit-keyframes fadeOutDownBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutDownBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDownBig[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOutDownBig;\r\n  animation-name: fadeOutDownBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutLeft {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutLeft {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOutLeft;\r\n  animation-name: fadeOutLeft;\r\n}\r\n\r\n@-webkit-keyframes fadeOutLeftBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutLeftBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeftBig[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOutLeftBig;\r\n  animation-name: fadeOutLeftBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutRight {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutRight {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOutRight;\r\n  animation-name: fadeOutRight;\r\n}\r\n\r\n@-webkit-keyframes fadeOutRightBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutRightBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRightBig[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOutRightBig;\r\n  animation-name: fadeOutRightBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUp[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOutUp;\r\n  animation-name: fadeOutUp;\r\n}\r\n\r\n@-webkit-keyframes fadeOutUpBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutUpBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUpBig[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeOutUpBig;\r\n  animation-name: fadeOutUpBig;\r\n}\r\n\r\n@-webkit-keyframes flip {\r\n  from {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  50% {\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) scale3d(.95, .95, .95);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n}\r\n\r\n@keyframes flip {\r\n  from {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  50% {\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) scale3d(.95, .95, .95);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n}\r\n\r\n.animated.flip[_ngcontent-%COMP%] {\r\n  -webkit-backface-visibility: visible;\r\n  backface-visibility: visible;\r\n  -webkit-animation-name: flip;\r\n  animation-name: flip;\r\n}\r\n\r\n@-webkit-keyframes flipInX {\r\n  from {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n@keyframes flipInX {\r\n  from {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInX[_ngcontent-%COMP%] {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipInX;\r\n  animation-name: flipInX;\r\n}\r\n\r\n@-webkit-keyframes flipInY {\r\n  from {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n@keyframes flipInY {\r\n  from {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInY[_ngcontent-%COMP%] {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipInY;\r\n  animation-name: flipInY;\r\n}\r\n\r\n@-webkit-keyframes flipOutX {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flipOutX {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutX[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: flipOutX;\r\n  animation-name: flipOutX;\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n}\r\n\r\n@-webkit-keyframes flipOutY {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flipOutY {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutY[_ngcontent-%COMP%] {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipOutY;\r\n  animation-name: flipOutY;\r\n}\r\n\r\n@-webkit-keyframes lightSpeedIn {\r\n  from {\r\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  60% {\r\n    transform: skewX(20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: skewX(-5deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes lightSpeedIn {\r\n  from {\r\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  60% {\r\n    transform: skewX(20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: skewX(-5deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.lightSpeedIn[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: lightSpeedIn;\r\n  animation-name: lightSpeedIn;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\r\n}\r\n\r\n@-webkit-keyframes lightSpeedOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes lightSpeedOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.lightSpeedOut[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: lightSpeedOut;\r\n  animation-name: lightSpeedOut;\r\n  -webkit-animation-timing-function: ease-in;\r\n  animation-timing-function: ease-in;\r\n}\r\n\r\n@-webkit-keyframes rotateIn {\r\n  from {\r\n    transform-origin: center;\r\n    transform: rotate3d(0, 0, 1, -200deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: center;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateIn {\r\n  from {\r\n    transform-origin: center;\r\n    transform: rotate3d(0, 0, 1, -200deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: center;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateIn[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateIn;\r\n  animation-name: rotateIn;\r\n}\r\n\r\n@-webkit-keyframes rotateInDownLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInDownLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateInDownLeft;\r\n  animation-name: rotateInDownLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateInDownRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInDownRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateInDownRight;\r\n  animation-name: rotateInDownRight;\r\n}\r\n\r\n@-webkit-keyframes rotateInUpLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInUpLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateInUpLeft;\r\n  animation-name: rotateInUpLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateInUpRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, -90deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInUpRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, -90deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateInUpRight;\r\n  animation-name: rotateInUpRight;\r\n}\r\n\r\n@-webkit-keyframes rotateOut {\r\n  from {\r\n    transform-origin: center;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: center;\r\n    transform: rotate3d(0, 0, 1, 200deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOut {\r\n  from {\r\n    transform-origin: center;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: center;\r\n    transform: rotate3d(0, 0, 1, 200deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOut[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateOut;\r\n  animation-name: rotateOut;\r\n}\r\n\r\n@-webkit-keyframes rotateOutDownLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutDownLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateOutDownLeft;\r\n  animation-name: rotateOutDownLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateOutDownRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutDownRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateOutDownRight;\r\n  animation-name: rotateOutDownRight;\r\n}\r\n\r\n@-webkit-keyframes rotateOutUpLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutUpLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateOutUpLeft;\r\n  animation-name: rotateOutUpLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateOutUpRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutUpRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rotateOutUpRight;\r\n  animation-name: rotateOutUpRight;\r\n}\r\n\r\n@-webkit-keyframes hinge {\r\n  0% {\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  20%, 60% {\r\n    transform: rotate3d(0, 0, 1, 80deg);\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  40%, 80% {\r\n    transform: rotate3d(0, 0, 1, 60deg);\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 700px, 0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes hinge {\r\n  0% {\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  20%, 60% {\r\n    transform: rotate3d(0, 0, 1, 80deg);\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  40%, 80% {\r\n    transform: rotate3d(0, 0, 1, 60deg);\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 700px, 0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.hinge[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: hinge;\r\n  animation-name: hinge;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes rollIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes rollIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.rollIn[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rollIn;\r\n  animation-name: rollIn;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n\r\n@keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n\r\n.rollOut[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: rollOut;\r\n  animation-name: rollOut;\r\n}\r\n\r\n@-webkit-keyframes zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.zoomIn[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomIn;\r\n  animation-name: zoomIn;\r\n}\r\n\r\n@-webkit-keyframes zoomInDown {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInDown {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomInDown;\r\n  animation-name: zoomInDown;\r\n}\r\n\r\n@-webkit-keyframes zoomInLeft {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInLeft {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomInLeft;\r\n  animation-name: zoomInLeft;\r\n}\r\n\r\n@-webkit-keyframes zoomInRight {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInRight {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomInRight;\r\n  animation-name: zoomInRight;\r\n}\r\n\r\n@-webkit-keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInUp[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomInUp;\r\n  animation-name: zoomInUp;\r\n}\r\n\r\n@-webkit-keyframes zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.zoomOut[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomOut;\r\n  animation-name: zoomOut;\r\n}\r\n\r\n@-webkit-keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n    transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n    transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomOutDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomOutDown;\r\n  animation-name: zoomOutDown;\r\n}\r\n\r\n@-webkit-keyframes zoomOutLeft {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(.1) translate3d(-2000px, 0, 0);\r\n    transform-origin: left center;\r\n  }\r\n}\r\n\r\n@keyframes zoomOutLeft {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(.1) translate3d(-2000px, 0, 0);\r\n    transform-origin: left center;\r\n  }\r\n}\r\n\r\n.zoomOutLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomOutLeft;\r\n  animation-name: zoomOutLeft;\r\n}\r\n\r\n@-webkit-keyframes zoomOutRight {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(.1) translate3d(2000px, 0, 0);\r\n    transform-origin: right center;\r\n  }\r\n}\r\n\r\n@keyframes zoomOutRight {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(.1) translate3d(2000px, 0, 0);\r\n    transform-origin: right center;\r\n  }\r\n}\r\n\r\n.zoomOutRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomOutRight;\r\n  animation-name: zoomOutRight;\r\n}\r\n\r\n@-webkit-keyframes zoomOutUp {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\r\n    transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomOutUp {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\r\n    transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomOutUp[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomOutUp;\r\n  animation-name: zoomOutUp;\r\n}\r\n\r\n@-webkit-keyframes slideInDown {\r\n  from {\r\n    transform: translate3d(0, -100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInDown {\r\n  from {\r\n    transform: translate3d(0, -100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: slideInDown;\r\n  animation-name: slideInDown;\r\n}\r\n\r\n@-webkit-keyframes slideInLeft {\r\n  from {\r\n    transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInLeft {\r\n  from {\r\n    transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: slideInLeft;\r\n  animation-name: slideInLeft;\r\n}\r\n\r\n@-webkit-keyframes slideInRight {\r\n  from {\r\n    transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInRight {\r\n  from {\r\n    transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: slideInRight;\r\n  animation-name: slideInRight;\r\n}\r\n\r\n@-webkit-keyframes slideInUp {\r\n  from {\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInUp[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: slideInUp;\r\n  animation-name: slideInUp;\r\n}\r\n\r\n@-webkit-keyframes slideOutDown {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutDown {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: slideOutDown;\r\n  animation-name: slideOutDown;\r\n}\r\n\r\n@-webkit-keyframes slideOutLeft {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutLeft {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutLeft[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: slideOutLeft;\r\n  animation-name: slideOutLeft;\r\n}\r\n\r\n@-webkit-keyframes slideOutRight {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutRight {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutRight[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: slideOutRight;\r\n  animation-name: slideOutRight;\r\n}\r\n\r\n@-webkit-keyframes slideOutUp {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutUp {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutUp[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: slideOutUp;\r\n  animation-name: slideOutUp;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYW5pbWF0ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCOztBQUVoQjs7Ozs7Q0FLQzs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0UsMkVBQTJFO0lBQzNFLG1FQUFtRTtJQUVuRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwyRUFBMkU7SUFDM0UsbUVBQW1FO0lBRW5FLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLDJFQUEyRTtJQUMzRSxtRUFBbUU7SUFFbkUsbUNBQW1DO0VBQ3JDOztFQUVBO0lBRUUsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJFQUEyRTtJQUMzRSxtRUFBbUU7SUFFbkUsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsMkVBQTJFO0lBQzNFLG1FQUFtRTtJQUVuRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSwyRUFBMkU7SUFDM0UsbUVBQW1FO0lBRW5FLG1DQUFtQztFQUNyQzs7RUFFQTtJQUVFLGdDQUFnQztFQUNsQztBQUNGOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUV0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7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QUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBRUUsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0JBQWtCO0lBRWxCLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxrQkFBa0I7SUFFbEIsa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxrQkFBa0I7SUFFbEIsbUNBQW1DO0VBQ3JDO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUVsQixtQ0FBbUM7RUFDckM7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL3N0eWxlcy9hbmltYXRlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcclxuXHJcbi8qIVxyXG5BbmltYXRlLmNzcyAtIGh0dHA6Ly9kYW5lZGVuLm1lL2FuaW1hdGVcclxuTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuQ29weXJpZ2h0IChjKSAyMDE1IERhbmllbCBFZGVuXHJcbiovXHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcbi5hbmltYXRlZC1mYXN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcbi5mdGNvLWFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uYW5pbWF0ZWQuaW5maW5pdGUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi5hbmltYXRlZC5oaW5nZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbn1cclxuXHJcbi5hbmltYXRlZC5ib3VuY2VJbixcclxuLmFuaW1hdGVkLmJvdW5jZU91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC43NXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzVzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWQuZmxpcE91dFgsXHJcbi5hbmltYXRlZC5mbGlwT3V0WSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC43NXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzVzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcclxuICBmcm9tLCAyMCUsIDUzJSwgODAlLCB0byB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gIH1cclxuXHJcbiAgNDAlLCA0MyUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xyXG4gIH1cclxuXHJcbiAgOTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC00cHgsMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTRweCwwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICBmcm9tLCAyMCUsIDUzJSwgODAlLCB0byB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gIH1cclxuXHJcbiAgNDAlLCA0MyUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xyXG4gIH1cclxuXHJcbiAgOTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC00cHgsMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTRweCwwKTtcclxuICB9XHJcbn1cclxuXHJcbi5ib3VuY2Uge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2gge1xyXG4gIGZyb20sIDUwJSwgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDI1JSwgNzUlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcclxuICBmcm9tLCA1MCUsIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAyNSUsIDc1JSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZsYXNoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGFzaDtcclxuICBhbmltYXRpb24tbmFtZTogZmxhc2g7XHJcbn1cclxuXHJcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4ucHVsc2Uge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XHJcbiAgfVxyXG5cclxuICA2NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjk1LCAxLjA1LCAxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTUsIDEuMDUsIDEpO1xyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIC45NSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgLjk1LCAxKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBydWJiZXJCYW5kIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xyXG4gIH1cclxuXHJcbiAgNjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC45NSwgMS4wNSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk1LCAxLjA1LCAxKTtcclxuICB9XHJcblxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAuOTUsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIC45NSwgMSk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5ydWJiZXJCYW5kIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2Uge1xyXG4gIGZyb20sIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMCUsIDQwJSwgNjAlLCA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gIGZyb20sIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMCUsIDQwJSwgNjAlLCA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zaGFrZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hha2U7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmcge1xyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzd2luZyB7XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3dpbmcge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHN3aW5nO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzd2luZztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHRhZGEge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICAxMCUsIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xyXG4gIH1cclxuXHJcbiAgMzAlLCA1MCUsIDcwJSwgOTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xyXG4gIH1cclxuXHJcbiAgNDAlLCA2MCUsIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRhZGEge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICAxMCUsIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xyXG4gIH1cclxuXHJcbiAgMzAlLCA1MCUsIDcwJSwgOTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xyXG4gIH1cclxuXHJcbiAgNDAlLCA2MCUsIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4udGFkYSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdGFkYTtcclxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcclxufVxyXG5cclxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgd29iYmxlIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcbiAgMTUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcclxuICB9XHJcblxyXG4gIDQ1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XHJcbiAgfVxyXG5cclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB3b2JibGUge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG5cclxuICAxNSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xyXG4gIH1cclxuXHJcbiAgNDUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcclxuICB9XHJcblxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ud29iYmxlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHdvYmJsZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGplbGxvIHtcclxuICBmcm9tLCAxMS4xJSwgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG5cclxuICAyMi4yJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcclxuICB9XHJcblxyXG4gIDMzLjMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyk7XHJcbiAgfVxyXG5cclxuICA0NC40JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XHJcbiAgfVxyXG5cclxuICA1NS41JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XHJcbiAgfVxyXG5cclxuICA2Ni42JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcclxuICB9XHJcblxyXG4gIDc3LjclIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xyXG4gIH1cclxuXHJcbiAgODguOCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgamVsbG8ge1xyXG4gIGZyb20sIDExLjElLCB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcblxyXG4gIDIyLjIlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xyXG4gIH1cclxuXHJcbiAgMzMuMyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcclxuICB9XHJcblxyXG4gIDQ0LjQlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTtcclxuICB9XHJcblxyXG4gIDU1LjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcclxuICB9XHJcblxyXG4gIDY2LjYlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xyXG4gIH1cclxuXHJcbiAgNzcuNyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XHJcbiAgfVxyXG5cclxuICA4OC44JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmplbGxvIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBqZWxsbztcclxuICBhbmltYXRpb24tbmFtZTogamVsbG87XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW4ge1xyXG4gIGZyb20sIDIwJSwgNDAlLCA2MCUsIDgwJSwgdG8ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcclxuICB9XHJcblxyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcclxuICB9XHJcblxyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XHJcbiAgfVxyXG5cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjk3LCAuOTcsIC45Nyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk3LCAuOTcsIC45Nyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcclxuICBmcm9tLCAyMCUsIDQwJSwgNjAlLCA4MCUsIHRvIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgfVxyXG5cclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC45NywgLjk3LCAuOTcpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45NywgLjk3LCAuOTcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdW5jZUluIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbkRvd24ge1xyXG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgfVxyXG5cclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDI1cHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKTtcclxuICB9XHJcblxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XHJcbiAgfVxyXG5cclxuICA5MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcclxuICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gIH1cclxuXHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCk7XHJcbiAgfVxyXG5cclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgOTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlSW5Eb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluRG93bjtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XHJcbiAgZnJvbSwgNjAlLCA3NSUsIDkwJSwgdG8ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcclxuICB9XHJcblxyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjVweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDkwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xyXG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgfVxyXG5cclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwMHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICA5MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5ib3VuY2VJbkxlZnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5SaWdodCB7XHJcbiAgZnJvbSwgNjAlLCA3NSUsIDkwJSwgdG8ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcclxuICB9XHJcblxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAwcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDkwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xyXG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgfVxyXG5cclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICA5MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdW5jZUluUmlnaHQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcclxuICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gIH1cclxuXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgOTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcclxuICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gIH1cclxuXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgOTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdW5jZUluVXAge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXQge1xyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcclxuICB9XHJcblxyXG4gIDUwJSwgNTUlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlT3V0IHtcclxuICAyMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XHJcbiAgfVxyXG5cclxuICA1MCUsIDU1JSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlT3V0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dERvd24ge1xyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgNDAlLCA0NSUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlT3V0RG93biB7XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgfVxyXG5cclxuICA0MCUsIDQ1JSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdW5jZU91dERvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dERvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dERvd247XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcclxuICAyMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlT3V0TGVmdCB7XHJcbiAgMjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlT3V0TGVmdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0IHtcclxuICAyMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlT3V0UmlnaHQge1xyXG4gIDIwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdW5jZU91dFJpZ2h0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRSaWdodDtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0UmlnaHQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRVcCB7XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIDQwJSwgNDUlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dFVwIHtcclxuICAyMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgNDAlLCA0NSUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5ib3VuY2VPdXRVcCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0VXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFVwO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLyotd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7Ki9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MHB4LCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC8qLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApOyovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTBweCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duQmlnIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5Eb3duQmlnIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVJbkRvd25CaWcge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWc7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWc7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAvKi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTsqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLyotd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7Ki9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluTGVmdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkxlZnRCaWcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnRCaWcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluTGVmdEJpZyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAvKi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7Ki9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLyotd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApOyovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW5SaWdodCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHRCaWcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5SaWdodEJpZyB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluUmlnaHRCaWcge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0QmlnO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodEJpZztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAvKi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7Ki9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA0MHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLyotd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApOyovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDQwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW5VcCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXBNZW51IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAvKi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7Ki9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5VcE1lbnUge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC8qLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTsqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluVXBNZW51IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcE1lbnU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwTWVudTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblVwQmlnIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluVXBCaWcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVJblVwQmlnIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcEJpZztcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWc7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVPdXQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0RG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDQwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0RG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDQwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVPdXREb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bjtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0RG93bkJpZyB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0RG93bkJpZyB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVPdXREb3duQmlnIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcclxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd25CaWc7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dExlZnQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZU91dExlZnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0QmlnIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVPdXRMZWZ0QmlnIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdEJpZztcclxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnRCaWc7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVPdXRSaWdodCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0QmlnIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZU91dFJpZ2h0QmlnIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHRCaWc7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodEJpZztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRVcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVPdXRVcCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFVwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VXBCaWcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0VXBCaWcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVPdXRVcEJpZyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFVwQmlnO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXBCaWc7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCguOTUsIC45NSwgLjk1KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGlwIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCguOTUsIC45NSwgLjk1KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGVkLmZsaXAge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwSW5YIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGlwSW5YIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmZsaXBJblgge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwSW5YO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwSW5YO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcEluWSB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0yMGRlZyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgMTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgMTBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC01ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC01ZGVnKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxpcEluWSB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0yMGRlZyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgMTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgMTBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC01ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC01ZGVnKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5mbGlwSW5ZIHtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcEluWTtcclxuICBhbmltYXRpb24tbmFtZTogZmxpcEluWTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxpcE91dFgge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZsaXBPdXRYIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcclxuICBhbmltYXRpb24tbmFtZTogZmxpcE91dFg7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcE91dFkge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNWRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGlwT3V0WSB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxpcE91dFkge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WTtcclxuICBhbmltYXRpb24tbmFtZTogZmxpcE91dFk7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsaWdodFNwZWVkSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGlnaHRTcGVlZEluIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlnaHRTcGVlZEluIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW47XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRJbjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGlnaHRTcGVlZE91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5saWdodFNwZWVkT3V0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0yMDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ucm90YXRlSW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbjtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluRG93bkxlZnQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVJbkRvd25MZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5yb3RhdGVJbkRvd25MZWZ0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25MZWZ0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25MZWZ0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93blJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdGF0ZUluRG93blJpZ2h0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25SaWdodDtcclxuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdGF0ZUluVXBMZWZ0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwTGVmdDtcclxuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5VcExlZnQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwUmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC05MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC05MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ucm90YXRlSW5VcFJpZ2h0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwUmlnaHQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBSaWdodDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlT3V0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdGF0ZU91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlT3V0RG93bkxlZnQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucm90YXRlT3V0RG93bkxlZnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25MZWZ0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duTGVmdDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlT3V0RG93blJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdGF0ZU91dERvd25SaWdodCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93blJpZ2h0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duUmlnaHQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcExlZnQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlT3V0VXBMZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucm90YXRlT3V0VXBMZWZ0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwTGVmdDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dFVwUmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5yb3RhdGVPdXRVcFJpZ2h0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcFJpZ2h0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcFJpZ2h0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGluZ2Uge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIDIwJSwgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIDQwJSwgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoaW5nZSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgMjAlLCA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgODBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgNDAlLCA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDcwMHB4LCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaGluZ2Uge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhpbmdlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBoaW5nZTtcclxufVxyXG5cclxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbEluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnJvbGxJbiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm9sbEluO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsSW47XHJcbn1cclxuXHJcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvbGxPdXQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm9sbE91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLnJvbGxPdXQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi56b29tSW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcclxuICBhbmltYXRpb24tbmFtZTogem9vbUluO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluRG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTEwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTEwMDBweCwgMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tSW5Eb3duIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uem9vbUluRG93biB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluRG93bjtcclxuICBhbmltYXRpb24tbmFtZTogem9vbUluRG93bjtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkxlZnQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbUluTGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwgMCwgMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnpvb21JbkxlZnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbkxlZnQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkxlZnQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5SaWdodCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tSW5SaWdodCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnpvb21JblJpZ2h0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5SaWdodDtcclxuICBhbmltYXRpb24tbmFtZTogem9vbUluUmlnaHQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMTAwMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMTAwMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnpvb21JblVwIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5VcDtcclxuICBhbmltYXRpb24tbmFtZTogem9vbUluVXA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbU91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uem9vbU91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dDtcclxuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXREb3duIHtcclxuICA0MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbU91dERvd24ge1xyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnpvb21PdXREb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0RG93bjtcclxuICBhbmltYXRpb24tbmFtZTogem9vbU91dERvd247XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0TGVmdCB7XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21PdXRMZWZ0IHtcclxuICA0MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi56b29tT3V0TGVmdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dExlZnQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRMZWZ0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dFJpZ2h0IHtcclxuICA0MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tT3V0UmlnaHQge1xyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTQycHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uem9vbU91dFJpZ2h0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRSaWdodDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXRVcCB7XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21PdXRVcCB7XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uem9vbU91dFVwIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRVcDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZUluRG93biB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlSW5MZWZ0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlSW5SaWdodCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluUmlnaHQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlSW5VcCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJblVwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluVXA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dERvd24ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0RG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZU91dERvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0RG93bjtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXREb3duO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRMZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlT3V0TGVmdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlT3V0UmlnaHQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0UmlnaHQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0UmlnaHQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFVwIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0VXAge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZU91dFVwIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwO1xyXG59Il19 */"], data: { animation: [_covalent_core_common__WEBPACK_IMPORTED_MODULE_1__["tdRotateAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css', '../styles/animate.css'],
                animations: [_covalent_core_common__WEBPACK_IMPORTED_MODULE_1__["tdRotateAnimation"]],
            }]
    }], function () { return [{ type: _covalent_core_media__WEBPACK_IMPORTED_MODULE_3__["TdMediaService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _covalent_core_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @covalent/core/common */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-common.js");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @covalent/core/layout */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-layout.js");
/* harmony import */ var _covalent_core_media__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @covalent/core/media */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-media.js");
/* harmony import */ var _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @covalent/core/expansion-panel */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-expansion-panel.js");
/* harmony import */ var _covalent_core_steps__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @covalent/core/steps */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-steps.js");
/* harmony import */ var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @covalent/core/loading */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-loading.js");
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @covalent/core/dialogs */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-dialogs.js");
/* harmony import */ var _covalent_core_search__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @covalent/core/search */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-search.js");
/* harmony import */ var _covalent_core_paging__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @covalent/core/paging */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-paging.js");
/* harmony import */ var _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @covalent/core/notifications */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-notifications.js");
/* harmony import */ var _covalent_core_menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @covalent/core/menu */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-menu.js");
/* harmony import */ var _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @covalent/core/data-table */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-data-table.js");
/* harmony import */ var _covalent_core_message__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @covalent/core/message */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-message.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./auth/error.interceptor */ "./src/app/auth/error.interceptor.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./advertisement/advertisement.component */ "./src/app/advertisement/advertisement.component.ts");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./service/blog.service */ "./src/app/service/blog.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_advertisement_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./service/advertisement.service */ "./src/app/service/advertisement.service.ts");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./service/search.service */ "./src/app/service/search.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _blog_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./blog-list.component */ "./src/app/blog-list.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_recomendaciones_recomendaciones_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/recomendaciones/recomendaciones.component */ "./src/app/components/recomendaciones/recomendaciones.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pages/favoritos/favoritos.component */ "./src/app/pages/favoritos/favoritos.component.ts");
/* harmony import */ var _blog_single_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./blog-single.component */ "./src/app/blog-single.component.ts");
/* harmony import */ var _property_upload_propertyUpload_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./property-upload/propertyUpload.component */ "./src/app/property-upload/propertyUpload.component.ts");







































































class AppModule {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl("/assets/symbol-defs.svg"));
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); }, providers: [
        _service_book_service__WEBPACK_IMPORTED_MODULE_48__["BookService"],
        _auth_login_service__WEBPACK_IMPORTED_MODULE_43__["LoginService"],
        _service_blog_service__WEBPACK_IMPORTED_MODULE_54__["BlogService"],
        _service_user_service__WEBPACK_IMPORTED_MODULE_55__["UserService"],
        _service_advertisement_service__WEBPACK_IMPORTED_MODULE_56__["AdvertisementService"],
        _service_search_service__WEBPACK_IMPORTED_MODULE_57__["SearchService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__["BasicAuthInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_45__["ErrorInterceptor"], multi: true },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_47__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_47__["HashLocationStrategy"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            /** Material Modules */
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            /** Covalent Modules */
            _covalent_core_common__WEBPACK_IMPORTED_MODULE_30__["CovalentCommonModule"],
            _covalent_core_layout__WEBPACK_IMPORTED_MODULE_31__["CovalentLayoutModule"],
            _covalent_core_media__WEBPACK_IMPORTED_MODULE_32__["CovalentMediaModule"],
            _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["CovalentExpansionPanelModule"],
            _covalent_core_steps__WEBPACK_IMPORTED_MODULE_34__["CovalentStepsModule"],
            _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_36__["CovalentDialogsModule"],
            _covalent_core_loading__WEBPACK_IMPORTED_MODULE_35__["CovalentLoadingModule"],
            _covalent_core_search__WEBPACK_IMPORTED_MODULE_37__["CovalentSearchModule"],
            _covalent_core_paging__WEBPACK_IMPORTED_MODULE_38__["CovalentPagingModule"],
            _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_39__["CovalentNotificationsModule"],
            _covalent_core_menu__WEBPACK_IMPORTED_MODULE_40__["CovalentMenuModule"],
            _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_41__["CovalentDataTableModule"],
            _covalent_core_message__WEBPACK_IMPORTED_MODULE_42__["CovalentMessageModule"],
            /** Additional **/
            //NgxChartsModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_44__["routing"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_50__["BookDetailComponent"],
        _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_51__["BookListComponent"],
        _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_49__["AdvertisementComponent"],
        _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_53__["BookFormComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_52__["LoginComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_58__["HeaderComponent"],
        _blog_list_component__WEBPACK_IMPORTED_MODULE_59__["blogListComponent"],
        _blog_single_component__WEBPACK_IMPORTED_MODULE_64__["blogSingleComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_60__["HomeComponent"],
        _components_recomendaciones_recomendaciones_component__WEBPACK_IMPORTED_MODULE_61__["RecomendacionesComponent"],
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_62__["RegisterComponent"],
        _pages_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_63__["FavoritosComponent"],
        _property_upload_propertyUpload_component__WEBPACK_IMPORTED_MODULE_65__["PropertyUploadComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        /** Material Modules */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        /** Covalent Modules */
        _covalent_core_common__WEBPACK_IMPORTED_MODULE_30__["CovalentCommonModule"],
        _covalent_core_layout__WEBPACK_IMPORTED_MODULE_31__["CovalentLayoutModule"],
        _covalent_core_media__WEBPACK_IMPORTED_MODULE_32__["CovalentMediaModule"],
        _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["CovalentExpansionPanelModule"],
        _covalent_core_steps__WEBPACK_IMPORTED_MODULE_34__["CovalentStepsModule"],
        _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_36__["CovalentDialogsModule"],
        _covalent_core_loading__WEBPACK_IMPORTED_MODULE_35__["CovalentLoadingModule"],
        _covalent_core_search__WEBPACK_IMPORTED_MODULE_37__["CovalentSearchModule"],
        _covalent_core_paging__WEBPACK_IMPORTED_MODULE_38__["CovalentPagingModule"],
        _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_39__["CovalentNotificationsModule"],
        _covalent_core_menu__WEBPACK_IMPORTED_MODULE_40__["CovalentMenuModule"],
        _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_41__["CovalentDataTableModule"],
        _covalent_core_message__WEBPACK_IMPORTED_MODULE_42__["CovalentMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    /** Material Modules */
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    /** Covalent Modules */
                    _covalent_core_common__WEBPACK_IMPORTED_MODULE_30__["CovalentCommonModule"],
                    _covalent_core_layout__WEBPACK_IMPORTED_MODULE_31__["CovalentLayoutModule"],
                    _covalent_core_media__WEBPACK_IMPORTED_MODULE_32__["CovalentMediaModule"],
                    _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["CovalentExpansionPanelModule"],
                    _covalent_core_steps__WEBPACK_IMPORTED_MODULE_34__["CovalentStepsModule"],
                    _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_36__["CovalentDialogsModule"],
                    _covalent_core_loading__WEBPACK_IMPORTED_MODULE_35__["CovalentLoadingModule"],
                    _covalent_core_search__WEBPACK_IMPORTED_MODULE_37__["CovalentSearchModule"],
                    _covalent_core_paging__WEBPACK_IMPORTED_MODULE_38__["CovalentPagingModule"],
                    _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_39__["CovalentNotificationsModule"],
                    _covalent_core_menu__WEBPACK_IMPORTED_MODULE_40__["CovalentMenuModule"],
                    _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_41__["CovalentDataTableModule"],
                    _covalent_core_message__WEBPACK_IMPORTED_MODULE_42__["CovalentMessageModule"],
                    /** Additional **/
                    //NgxChartsModule,
                    _app_routing__WEBPACK_IMPORTED_MODULE_44__["routing"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_50__["BookDetailComponent"],
                    _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_51__["BookListComponent"],
                    _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_49__["AdvertisementComponent"],
                    _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_53__["BookFormComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_52__["LoginComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_58__["HeaderComponent"],
                    _blog_list_component__WEBPACK_IMPORTED_MODULE_59__["blogListComponent"],
                    _blog_single_component__WEBPACK_IMPORTED_MODULE_64__["blogSingleComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_60__["HomeComponent"],
                    _components_recomendaciones_recomendaciones_component__WEBPACK_IMPORTED_MODULE_61__["RecomendacionesComponent"],
                    _pages_register_register_component__WEBPACK_IMPORTED_MODULE_62__["RegisterComponent"],
                    _pages_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_63__["FavoritosComponent"],
                    _property_upload_propertyUpload_component__WEBPACK_IMPORTED_MODULE_65__["PropertyUploadComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                providers: [
                    _service_book_service__WEBPACK_IMPORTED_MODULE_48__["BookService"],
                    _auth_login_service__WEBPACK_IMPORTED_MODULE_43__["LoginService"],
                    _service_blog_service__WEBPACK_IMPORTED_MODULE_54__["BlogService"],
                    _service_user_service__WEBPACK_IMPORTED_MODULE_55__["UserService"],
                    _service_advertisement_service__WEBPACK_IMPORTED_MODULE_56__["AdvertisementService"],
                    _service_search_service__WEBPACK_IMPORTED_MODULE_57__["SearchService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__["BasicAuthInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_45__["ErrorInterceptor"], multi: true },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_47__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_47__["HashLocationStrategy"] },
                ],
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertisement/advertisement.component */ "./src/app/advertisement/advertisement.component.ts");
/* harmony import */ var _blog_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-list.component */ "./src/app/blog-list.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/favoritos/favoritos.component */ "./src/app/pages/favoritos/favoritos.component.ts");
/* harmony import */ var _blog_single_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-single.component */ "./src/app/blog-single.component.ts");
/* harmony import */ var _service_auth_auth_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/auth/auth.user.service */ "./src/app/service/auth/auth.user.service.ts");
/* harmony import */ var _property_upload_propertyUpload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./property-upload/propertyUpload.component */ "./src/app/property-upload/propertyUpload.component.ts");












//import { PropertyUploadComponent } from './property-upload/propertyUpload.component';
const appRoutes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'advertisement', component: _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisementComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'favoritos/:id', component: _pages_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_8__["FavoritosComponent"], canActivate: [_service_auth_auth_user_service__WEBPACK_IMPORTED_MODULE_10__["AuthUserService"]] },
    { path: 'book/new', component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_1__["BookFormComponent"] },
    { path: 'book/:id', component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_2__["BookDetailComponent"] },
    { path: 'book/edit/:id', component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_1__["BookFormComponent"] },
    // { path: '', redirectTo: 'advertisement', pathMatch: 'full' },
    { path: 'blog', component: _blog_list_component__WEBPACK_IMPORTED_MODULE_4__["blogListComponent"] },
    { path: 'blog/:id', component: _blog_single_component__WEBPACK_IMPORTED_MODULE_9__["blogSingleComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    //{ path: 'blog/:id', component: blogSingleComponent},
    { path: 'propertyUpload', component: _property_upload_propertyUpload_component__WEBPACK_IMPORTED_MODULE_11__["PropertyUploadComponent"] }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// Strategy based on http://jasonwatmore.com/post/2018/09/07/angular-6-basic-http-authentication-tutorial-example
class BasicAuthInterceptor {
    intercept(request, next) {
        // add authorization header with basic auth credentials if available
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user && user.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${user.authdata}`
                }
            });
        }
        return next.handle(request);
    }
}
BasicAuthInterceptor.ɵfac = function BasicAuthInterceptor_Factory(t) { return new (t || BasicAuthInterceptor)(); };
BasicAuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BasicAuthInterceptor, factory: BasicAuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicAuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/error.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/error.interceptor.ts ***!
  \*******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/auth/login.service.ts");





class ErrorInterceptor {
    constructor(loginService) {
        this.loginService = loginService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.loginService.removeCurrentUser();
                //location.reload(true);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth/login.service.ts ***!
  \***************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const URL = '/api';
class LoginService {
    constructor(http) {
        this.http = http;
        this.isLogged = false;
        this.isAdmin = false;
        if (localStorage.getItem('currentUser') == null || localStorage.getItem('currentUser') == undefined || localStorage.getItem('currentUser').length <= 0) {
        }
        else {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            if (user) {
                console.log('Logged user');
                this.setCurrentUser(user);
            }
        }
    }
    logIn(user, pass) {
        let auth = window.btoa(user + ':' + pass);
        console.log('auth', auth);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: 'Basic ' + auth,
            'X-Requested-With': 'XMLHttpRequest',
        });
        console.log('headers', headers);
        console.log('user:', user, 'passw :', pass);
        //return this.http.get(this.url +'login?email=' + user.name + '&password=' + user.password );
        return this.http.get('/api/users/loginTres?email=' + user + '&password=' + pass, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            console.log('respuesta user', user);
            try {
                if (user) {
                    this.setCurrentUser(user);
                    user.authdata = auth;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            }
            catch (error) {
                console.log('Error en la respuesta', error);
            }
            return user;
        }));
    }
    logOut() {
        return this.http.get(URL + '/logOut').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.removeCurrentUser();
            return response;
        }));
    }
    setCurrentUser(user) {
        this.isLogged = true;
        this.user = user;
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
    }
    removeCurrentUser() {
        localStorage.removeItem('currentUser');
        this.isLogged = false;
        this.isAdmin = false;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blog-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog-list.component.ts ***!
  \****************************************/
/*! exports provided: blogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogListComponent", function() { return blogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/blog.service */ "./src/app/service/blog.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/blog", a1]; };
function blogListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "July. 24, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Diana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, blog_r40.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", blog_r40.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r40.text);
} }
class blogListComponent {
    constructor(blogService) {
        this.blogService = blogService;
        this.blogs = [];
    }
    ngOnInit() {
        this.blogService.getBlogs(0, 5).subscribe(blogs => this.blogs = blogs, error => console.log(error));
    }
    getBlogs(page, quantity) {
        this.blogService.getBlogs(page, quantity).subscribe(blogs => this.blogs = blogs, error => console.log(error));
    }
}
blogListComponent.ɵfac = function blogListComponent_Factory(t) { return new (t || blogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
blogListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: blogListComponent, selectors: [["ng-component"]], decls: 20, vars: 1, consts: [["data-stellar-background-ratio", "0.5", 1, "hero-wrap", "hero-wrap-2", "ftco-degree-bg", "js-fullheight", 2, "background-image", "url('assets/bg_1.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "js-fullheight", "align-items-center", "justify-content-center"], [1, "col-md-9", "pb-5", "text-center"], [1, "breadcrumbs"], [1, "mr-2"], ["href", "index.html"], [1, "ion-ios-arrow-forward"], [1, "mb-3", "bread"], [1, "ftco-section"], [1, "row", "d-flex"], ["class", "col-md-3 d-flex ", 4, "ngFor", "ngForOf"], [1, "col-md-3", "d-flex"], [1, "blog-entry", "justify-content-end"], [1, "text"], [1, "heading", "titulo"], [3, "routerLink"], [1, "meta", "mb-3"], [1, "block-20", "img", 2, "background-image", "url('assets/image_1.jpg')"], ["id", "blogMethods"], ["id", "deleteMethod", 1, "btn", "d-flex", "align-items-center", "btn-custom-edit", 2, "float", "left"], [1, "icon-trash"], ["id", "updateMethod", 1, "d-flex", "align-items-center", "btn-custom-edit2"], [1, "icon-edit", 2, "top", "5px"]], template: function blogListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nuestro Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, blogListComponent_div_19_Template, 21, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](blogListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './blog-list.component.html',
            }]
    }], function () { return [{ type: _service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blog-single.component.ts":
/*!******************************************!*\
  !*** ./src/app/blog-single.component.ts ***!
  \******************************************/
/*! exports provided: blogSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogSingleComponent", function() { return blogSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/blog.service */ "./src/app/service/blog.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function blogSingleComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.blog.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.blog.text);
} }
class blogSingleComponent {
    constructor(router, activatedRoute, blogService) {
        this.router = router;
        this.blogService = blogService;
        let id = activatedRoute.snapshot.params['id'];
        this.getBlog(id);
    }
    // ngOnInit(){
    //     const id=this.activatedRoute.snapshot.params['id'];
    //     this.getBlog(id);
    // }
    getBlog(id) {
        this.blogService.getBlog(id).subscribe(blog => this.blog = blog, error => console.log(error));
    }
}
blogSingleComponent.ɵfac = function blogSingleComponent_Factory(t) { return new (t || blogSingleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"])); };
blogSingleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: blogSingleComponent, selectors: [["ng-component"]], decls: 24, vars: 1, consts: [["data-stellar-background-ratio", "0.5", 1, "hero-wrap", "hero-wrap-2", "ftco-degree-bg", "js-fullheight", 2, "background-image", "url('assets/bg_1.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "js-fullheight", "align-items-center", "justify-content-center"], [1, "col-md-9", "pb-5", "text-center"], [1, "breadcrumbs"], [1, "mr-2"], ["href", "index.html"], [1, "ion-ios-arrow-forward"], ["href", "blog.html"], [1, "mb-3", "bread"], [1, "ftco-section", "ftco-degree-bg", 2, "background-color", "white"], [1, "row"], [1, "col-md-8", "order-md-last"], [4, "ngIf"], [1, "mb-3"], ["src", "../images/image_7.jpg", "alt", "", 1, "img-fluid"]], template: function blogSingleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Blog Single ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, blogSingleComponent_div_23_Template, 7, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](blogSingleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './blog-single.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/book-detail/book-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.ts ***!
  \******************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core/dialogs */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-dialogs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











function BookDetailComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookDetailComponent_div_0_ng_container_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.removeBook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookDetailComponent_div_0_ng_container_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.editBook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function BookDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BookDetailComponent_div_0_ng_container_10_Template, 9, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookDetailComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.gotoBooks(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All Books ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Book \"", ctx_r22.book.title, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.book.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.loginService.isLogged && ctx_r22.loginService.isAdmin);
} }
class BookDetailComponent {
    constructor(router, activatedRoute, service, loginService, _dialogService) {
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        this._dialogService = _dialogService;
        const id = activatedRoute.snapshot.params['id'];
        service.getBook(id).subscribe((book) => (this.book = book), (error) => console.error(error));
    }
    removeBook() {
        this._dialogService.openConfirm({
            message: 'Do you want to remove this book?',
            title: 'Confirm',
            width: '500px',
            height: '175px'
        }).afterClosed().subscribe((accept) => {
            if (accept) {
                this.service
                    .removeBook(this.book)
                    .subscribe((_) => this.router.navigate(['/books']), (error) => console.error(error));
            }
        });
    }
    editBook() {
        this.router.navigate(['/book/edit', this.book.id]);
    }
    gotoBooks() {
        this.router.navigate(['/books']);
    }
}
BookDetailComponent.ɵfac = function BookDetailComponent_Factory(t) { return new (t || BookDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"])); };
BookDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookDetailComponent, selectors: [["book-detail"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["layout", "row", "layout-align", "end center"], ["mat-raised-button", "", "color", "accent", 1, "push-left-sm", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function BookDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookDetailComponent_div_0_Template, 15, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'book-detail',
                templateUrl: 'book-detail.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }, { type: _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/book-form/book-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-form/book-form.component.ts ***!
  \**************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function BookFormComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.book.id);
} }
function BookFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookFormComponent_div_0_div_8_Template, 4, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFormComponent_div_0_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.book.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 5, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFormComponent_div_0_Template_textarea_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.book.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookFormComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookFormComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Book \"", ctx_r10.book.title, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.book.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.book.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r11 === undefined || _r11 && !_r11.valid);
} }
class BookFormComponent {
    constructor(_router, activatedRoute, service) {
        this._router = _router;
        this.service = service;
        const id = activatedRoute.snapshot.params['id'];
        if (id) {
            service.getBook(id).subscribe((book) => (this.book = book), (error) => console.error(error));
            this.newBook = false;
        }
        else {
            this.book = { title: '', description: '' };
            this.newBook = true;
        }
    }
    cancel() {
        window.history.back();
    }
    save() {
        this.service.saveBook(this.book).subscribe(_ => { }, (error) => console.error('Error creating new book: ' + error));
        window.history.back();
    }
}
BookFormComponent.ɵfac = function BookFormComponent_Factory(t) { return new (t || BookFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"])); };
BookFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookFormComponent, selectors: [["book-form"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["bookForm", "ngForm"], ["matInput", "", "placeholder", "Title", "name", "title", "required", "", 3, "ngModel", "ngModelChange"], ["bookFormElement", "", "bookFormControl", "ngModel"], ["layout", "column"], ["matInput", "", "placeholder", "Description", "name", "description", "required", "", 3, "ngModel", "ngModelChange"], ["layout", "row", "layout-align", "end center"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "push-left-sm", 3, "disabled", "click"]], template: function BookFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookFormComponent_div_0_Template, 26, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'book-form',
                templateUrl: 'book-form.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











const _c0 = function (a1) { return ["/book", a1]; };
function BookListComponent_mat_nav_list_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, book_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r4.title, " ");
} }
function BookListComponent_mat_nav_list_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookListComponent_mat_nav_list_8_a_1_Template, 2, 4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.books);
} }
const _c1 = function () { return { cursor: "auto" }; };
function BookListComponent_mat_nav_list_9_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r6.title, " ");
} }
function BookListComponent_mat_nav_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookListComponent_mat_nav_list_9_mat_list_item_1_Template, 2, 3, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.books);
} }
function BookListComponent_div_10_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookListComponent_div_10_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.newBook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookListComponent_div_10_button_2_Template, 4, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loginService.isLogged);
} }
class BookListComponent {
    constructor(router, service, loginService) {
        this.router = router;
        this.service = service;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.service.getBooks().subscribe(books => this.books = books, error => console.log(error));
    }
    newBook() {
        this.router.navigate(['/book/new']);
    }
}
BookListComponent.ɵfac = function BookListComponent_Factory(t) { return new (t || BookListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
BookListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookListComponent, selectors: [["book-list"]], decls: 11, vars: 3, consts: [["layout", "row", "layout-align", "start center"], ["flex", ""], [4, "ngIf"], ["layout", "column", "layout-align", "center end", 4, "ngIf"], ["mat-list-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "routerLink"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle"], ["layout", "column", "layout-align", "center end"], ["inset", "true"], ["mat-raised-button", "", "color", "accent", "class", "push-top-sm", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 1, "push-top-sm", 3, "click"]], template: function BookListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookListComponent_mat_nav_list_8_Template, 2, 1, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookListComponent_mat_nav_list_9_Template, 2, 1, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BookListComponent_div_10_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginService.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.isLogged && ctx.loginService.isAdmin);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'book-list',
                templateUrl: 'book-list.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }, { type: _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return [a0]; };
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r61.ruta));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r61.label);
} }
class HeaderComponent {
    constructor(UsuarioService) {
        this.UsuarioService = UsuarioService;
        this.itemsMenu = [];
        this.email = '';
    }
    ngOnInit() {
        this.comprobarLogin();
    }
    menuSimple() {
        this.itemsMenu = [
            { label: 'Home', ruta: 'home' },
            { label: 'Blog', ruta: 'blog' },
            { label: 'Login', ruta: 'login' }
        ];
        console.log('menu,user', this.itemsMenu);
    }
    /**
     *
     * Comprobar login
     * @memberof NavbarComponent
     */
    comprobarLogin() {
        //this.rellenarMenu();
        this.UsuarioService.logueado.subscribe(resp => {
            //console.log('Observable login ', resp );
            if (localStorage.getItem('email') == null || localStorage.getItem('email') == undefined) {
            }
            else {
                if (localStorage.getItem('email').length >= 1) {
                    this.email = localStorage.getItem('email');
                }
            }
            if (resp == 0) {
                this.rellenarMenu();
            }
            else {
                this.rellenarMenu();
            }
        });
    }
    /**
     * Rellenar Menu
     */
    rellenarMenu() {
        /* this.menuAdmin(); */
        if (localStorage.getItem('role') != null) {
            if (localStorage.getItem('role').localeCompare('ROLE_ADMIN') == 0) {
                this.menuAdmin();
            }
            else {
                this.menuUser();
            }
        }
        else {
            this.menuSimple();
        }
    }
    menuAdmin() {
        this.itemsMenu = [
            { label: 'Home', ruta: 'home' },
            { label: 'Blog', ruta: 'blog' },
            { label: this.email || 'Logout', ruta: 'login' },
            { label: 'Listado de anuncios', ruta: 'blog' },
            { label: 'Nuevo Blog', ruta: 'blog' },
        ];
        console.log('menu,admin', this.itemsMenu);
    }
    menuUser() {
        let id = localStorage.getItem('id');
        this.itemsMenu = [
            { label: 'Home', ruta: 'home' },
            { label: 'Poner anuncio', ruta: 'propertyUpload' },
            { label: 'Mis favoritos', ruta: 'favoritos/' + id },
            { label: 'Mis anuncios', ruta: 'Mis anuncios' },
            { label: 'Blog', ruta: 'blog' },
            { label: this.email || 'Logout', ruta: 'login'
            },
        ];
    }
    logout() {
        //this.UsuarioService.logueado.next(0);
        localStorage.clear();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["myHeader"]], decls: 10, vars: 1, consts: [["id", "ftco-navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "ftco_navbar", "bg-dark", "ftco-navbar-light"], [1, "container"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#ftco-nav", "aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "oi", "oi-menu"], ["id", "ftco-nav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ruvik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'myHeader',
                templateUrl: './header.component.html'
            }]
    }], function () { return [{ type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/recomendaciones/recomendaciones.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/recomendaciones/recomendaciones.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecomendacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecomendacionesComponent", function() { return RecomendacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function RecomendacionesComponent_div_8_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecomendacionesComponent_div_8_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.deleteFavo(item_r64.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecomendacionesComponent_div_8_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecomendacionesComponent_div_8_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.agregarFavoritos(item_r64.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { background: a0 }; };
function RecomendacionesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "/mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RecomendacionesComponent_div_8_button_26_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RecomendacionesComponent_div_8_button_27_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, "url(assets/static/images/" + item_r64.images[0] + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.rooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.bathrooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.squareMeters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Local en ", item_r64.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.showDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.showFavo);
} }
class RecomendacionesComponent {
    constructor(UsuarioService) {
        this.UsuarioService = UsuarioService;
        this.listar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('recomendaciones', this.items);
    }
    agregarFavoritos(id_favo) {
        console.log('id_favo: ', id_favo);
        let id_user = localStorage.getItem('id');
        this.UsuarioService.addFovrites(id_user, id_favo).toPromise()
            .then(resp => {
            //console.log('todo ha ido bien', resp);
        })
            .then(() => { })
            .catch(error => {
            console.log('error: ', error);
        });
    }
    deleteFavo(id_favo) {
        let id;
        try {
            id = localStorage.getItem('id');
            this.UsuarioService.removeFavorites(id, id_favo).toPromise()
                .then((resp) => {
                console.log('favoritos eliminado ', resp);
                this.listar.emit(true);
            }).catch(error => {
                console.log('error', error);
            });
        }
        catch (error) {
            console.log('no hay id', error);
        }
    }
}
RecomendacionesComponent.ɵfac = function RecomendacionesComponent_Factory(t) { return new (t || RecomendacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"])); };
RecomendacionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecomendacionesComponent, selectors: [["app-recomendaciones"]], inputs: { items: "items", showDelete: "showDelete", showFavo: "showFavo" }, outputs: { listar: "listar" }, decls: 9, vars: 1, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-md-12", "heading-section", "text-center", "ftco-animate", "mb-5", "fadeInUp", "ftco-animated"], [1, "subheading"], [1, "mb-2"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "property-wrap", "ftco-animate", "fadeInUp", "ftco-animated", 2, "background-color", "#e4dfdf9e"], ["href", "/properties/16", 1, "img", "posicion-imagen", 3, "ngStyle"], [1, "text", 2, "padding-bottom", "50px"], [1, "price"], [1, "old-price"], [1, "orig-price"], [1, "property_list"], [1, "flaticon-bed"], [1, "flaticon-bathtub"], [1, "flaticon-floor-plan"], ["href", "#"], [1, "location"], ["type", "button", "class", "boton-trash-favo", 3, "click", 4, "ngIf"], ["type", "button", "class", "d-flex align-items-center justify-content-center btn-custom", 3, "click", 4, "ngIf"], ["type", "button", 1, "boton-trash-favo", 3, "click"], [1, "icon-trash"], ["type", "button", 1, "d-flex", "align-items-center", "justify-content-center", "btn-custom", 3, "click"], [1, "icon-star-o"]], template: function RecomendacionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recomendaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Viviendas seleccionadas para ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RecomendacionesComponent_div_8_Template, 28, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21lbmRhY2lvbmVzL3JlY29tZW5kYWNpb25lcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecomendacionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recomendaciones',
                templateUrl: './recomendaciones.component.html',
                styleUrls: ['./recomendaciones.component.css']
            }]
    }], function () { return [{ type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showFavo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: url_base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url_base", function() { return url_base; });
const url_base = "https://localhost:8443/api/";


/***/ }),

/***/ "./src/app/pages/favoritos/favoritos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/favoritos/favoritos.component.ts ***!
  \********************************************************/
/*! exports provided: FavoritosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosComponent", function() { return FavoritosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_recomendaciones_recomendaciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/recomendaciones/recomendaciones.component */ "./src/app/components/recomendaciones/recomendaciones.component.ts");





function FavoritosComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-recomendaciones", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listar", function FavoritosComponent_div_4_Template_app_recomendaciones_listar_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.listar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r48.items)("showDelete", ctx_r48.showDelete)("showFavo", ctx_r48.showFavo);
} }
class FavoritosComponent {
    constructor(userService) {
        this.userService = userService;
        this.items = [];
        this.showDelete = true;
        this.showFavo = false;
    }
    ngOnInit() {
        this.listar();
        //this.userService. 
    }
    listar() {
        try {
            let id = localStorage.getItem('id');
            this.userService.getUSer(id).toPromise()
                .then((resp) => {
                console.log('resp', resp);
                this.items = resp.myAdvertisements;
            });
        }
        catch (error) {
        }
    }
}
FavoritosComponent.ɵfac = function FavoritosComponent_Factory(t) { return new (t || FavoritosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"])); };
FavoritosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritosComponent, selectors: [["app-favoritos"]], decls: 5, vars: 1, consts: [[1, "", 2, "margin-top", "100px"], [1, "text-center", "witt"], [4, "ngIf"], [3, "items", "showDelete", "showFavo", "listar"]], template: function FavoritosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mis favoritos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavoritosComponent_div_4_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_recomendaciones_recomendaciones_component__WEBPACK_IMPORTED_MODULE_3__["RecomendacionesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRvcy9mYXZvcml0b3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favoritos',
                templateUrl: './favoritos.component.html',
                styleUrls: ['./favoritos.component.css']
            }]
    }], function () { return [{ type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_advertisement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/advertisement.service */ "./src/app/service/advertisement.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_recomendaciones_recomendaciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/recomendaciones/recomendaciones.component */ "./src/app/components/recomendaciones/recomendaciones.component.ts");






function HomeComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recomendaciones", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r47.items)("showDelete", ctx_r47.showDelete)("showFavo", ctx_r47.showFavo);
} }
/* import { RecomendacionesService } from 'src/app/services/recomendaciones.service'; */
class HomeComponent {
    constructor(
    //private recomendacionesService: RecomendacionesService
    service) {
        this.service = service;
        this.price = '';
        this.rooms = '';
        this.bathrooms = '';
        this.squareMeters = '';
        this.property = '';
        this.location = '';
        this.type = '';
        this.id = '';
        this.key = '';
        this.value = '';
        this.showDelete = false;
        this.showFavo = true;
        this.showRecommend = false;
        this.items = [];
    }
    ngOnInit() {
        /* this.recomendacionesService.listarAdvertisement().toPromise()
        .then( resp => {
          console.log(resp);
          
          this.items = resp;
        }) */
        this.showRecommend = false;
        this.service.getAdvertisements().toPromise()
            .then(advertisements => {
            // console.log('advertisements', advertisements);
            this.items = advertisements;
        })
            .then(() => {
            this.showRecommend = true;
        })
            .catch(error => console.log('error'));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_advertisement_service__WEBPACK_IMPORTED_MODULE_1__["AdvertisementService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 121, vars: 1, consts: [[2, "margin-top", "100px"], ["data-stellar-background-ratio", "0.5", 1, "hero-wrap-2", "ftco-degree-bg", "js-fullheight", 2, "background-image", "url('assets/static/images/bg_1.jpg')"], [1, "row"], [1, "offset-lg-2", "col-lg-8", "col-md-12"], ["id", "containerPresentation", 1, "text", "text-center", "content-center"], [1, "mb-4"], [2, "font-size", "18px"], [1, "search-location", "mt-md-5"], [1, "row", "justify-content-center", "search-form"], [1, "col-lg-12", "align-items-end"], [1, "form-group"], [1, "form-field"], [1, "filter"], ["name", "searchType", 1, "selectInput"], ["value", "Alquiler"], ["value", "Venta"], ["name", "propertyType", 1, "selectInput"], ["value", "Casa"], ["value", "Piso"], ["value", "Local"], ["name", "squareMeters", "value", "25", "type", "number", "min", "10", "max", "250", 1, "numberInput"], ["name", "rooms", 1, "selectInput"], ["value", "1"], ["value", "2"], ["value", "3"], ["name", "bathrooms", 1, "selectInput"], ["value", "1000", "name", "price", "type", "number", "max", "5000000", 1, "numberInput"], ["type", "text", "name", "location", "placeholder", "Introduce una zona", 1, "form-control", "search"], ["type", "submit"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "col-lg-8", "col-md-6", "ftco-animate", "d-flex", "align-items-center", "justify-content-center"], ["method", "GET", "action", "search", 1, "search-location", "mt-md-5"], [1, "ion-ios-search"], ["class", "container", "style", "padding-top: 50px;", 4, "ngIf"], [1, "container", 2, "padding-top", "50px"], [3, "items", "showDelete", "showFavo"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Encuentra ya ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "tu pr\u00F3xima propiedad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Introduce la zona deseada y disfruta de nuestro cat\u00E1logo de viviendas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Busqueda de:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Alquiler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tipo de propiedad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Piso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Metros Cuadrados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " N\u00FAmero de habitaciones:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "3 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " N\u00FAmero de ba\u00C3\u00B1os:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Precio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Encuentra ya ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "tu pr\u00F3xima propiedad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Introduce la zona deseada y disfruta de nuestro cat\u00E1logo de viviendas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Busqueda de:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Alquiler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Tipo de propiedad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Piso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Metros Cuadrados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " N\u00FAmero de habitaciones:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "1 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "2 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "3 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " N\u00FAmero de ba\u00C3\u00B1os:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "1 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "2 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "3 o M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Precio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, HomeComponent_div_120_Template, 2, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRecommend);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_recomendaciones_recomendaciones_component__WEBPACK_IMPORTED_MODULE_4__["RecomendacionesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_service_advertisement_service__WEBPACK_IMPORTED_MODULE_1__["AdvertisementService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_4_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r41.loginForm);
} }
function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_5_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/register"]; };
const _c1 = function () { return ["/home"]; };
class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.logueado = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.userService.logueado.subscribe(resp => {
            if (resp == 0) {
                this.logueado = false;
            }
            else {
                this.logueado = true;
            }
        });
    }
    ngOnInit() {
        this.userService.comprobarLogin();
    }
    onSubmit() {
        console.log('loginForm', this.loginForm.value);
        this.userService.logIn(this.loginForm.value).toPromise()
            .then((resp) => {
            // console.log('respuesta', resp);
            if (resp == null) {
                console.log('No se ha encontrado usuario');
            }
            else {
                localStorage.setItem('name', resp.name);
                localStorage.setItem('email', resp.email);
                localStorage.setItem('role', resp.roles[0]);
                localStorage.setItem('id', resp.id);
                this.userService.logueado.next(1);
                this.router.navigate(['/home']);
            }
        }).then(() => {
        });
    }
    logOut() {
        localStorage.clear();
        this.userService.logueado.next(0);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 11, vars: 6, consts: [[1, "alquiles-login", 2, "background-image", "url('assets/static/images/bg_1.jpg')"], [1, "container", 2, "margin-top", "100px"], [1, "wrapper", "fadeInDown"], ["id", "formContent"], [4, "ngIf"], ["id", "formFooter"], [1, "underlineHover", 3, "routerLink"], [3, "routerLink"], ["type", "button", "value", "Home"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "username", "name", "username", "formControlName", "name", "placeholder", "Username", 1, "fadeIn", "second"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", "placeholder", "Password", 1, "fadeIn", "third", "psswdInput", "password-alquileres"], ["type", "submit", "value", "Log In", 1, "fadeIn", "fourth"], ["type", "button", "value", "Sign Out", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 7, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logueado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logueado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["a[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n}\r\n  \r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n}\r\n  \r\n.ErrorMessage[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n  \r\n\r\n  \r\n\r\n  \r\n\r\n  \r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n#formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n  \r\n#formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n  \r\n\r\n  \r\nh2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n  \r\nh2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n\r\n  \r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 40px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color:   #39ace7;\r\n  }\r\n  \r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n  \r\ninput[type=text][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 10px 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 10px;\r\n    width: 80%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n\r\n  \r\n\r\n  \r\n.fadeInDown[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n  \r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n\r\n  \r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n.fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n  \r\n\r\n  \r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n  \r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n  \r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n  \r\n\r\n  \r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n  \r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n  \r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n  \r\n.bgbtn02[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{     \r\n    margin-bottom: 10px;     \r\n    margin-right: 10px;     \r\n  }\r\n  \r\n\r\n  \r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 10px;\r\n    color: #FFC312;\r\n  }\r\n  \r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\r\n    color: rgb(23, 203, 248);\r\n    cursor: pointer;\r\n  }\r\n  \r\n.social_icon[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 5px;\r\n  }\r\n  \r\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    background-color: #FFC312;\r\n    color: black;\r\n    border:0 !important;\r\n  }\r\n  \r\n\r\n  \r\n*[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n  \r\n#icon[_ngcontent-%COMP%] {\r\n    width:60%;\r\n  }\r\n  \r\n.alquiles-login[_ngcontent-%COMP%]{\r\n      min-height: 100vh;\r\n  }\r\n  \r\n.password-alquileres[_ngcontent-%COMP%]{\r\n    background: #f6f6f6;\r\n    border: none;\r\n    border-radius: 4px;\r\n    width: 80%;\r\n    padding: 10px 16px;\r\n    margin: 10px;\r\n    height: 40px;\r\n    font-size: unset;\r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsVUFBVTs7QUFFVjs7Ozs7Ozs7SUFRSTs7QUFJRixjQUFjOztBQUVkO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsNEJBQTRCO0VBQzlCOztBQUlBLFNBQVM7O0FBRVQ7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsOENBQThDO0lBRTlDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFLM0IsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBS0Usc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBSUEsZUFBZTs7QUFFZix1Q0FBdUM7O0FBQ3ZDO0lBQ0Usa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtJQUNFLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBOzs7O0lBSUU7O0FBRUY7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDJCQUEyQjtJQUUzQixtQkFBbUI7RUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztJQUNFLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7QUFFQSxjQUFjOztBQUNkO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7O0FBR0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7RUFDVjs7QUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7QUFFQSxXQUFXOztBQUVYO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtJQUNFLFNBQVM7RUFDWDs7QUFDQTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuICBcclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuLkVycm9yTWVzc2FnZXtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiAgXHJcbi8qIEJBU0lDICovXHJcblxyXG4vKmh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL2JnXzEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH0qL1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIFNUUlVDVFVSRSAqL1xyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtQ29udGVudCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Gb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIFRBQlMgKi9cclxuICBcclxuICBoMi5pbmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgaDIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEZPUk0gVFlQT0dSQVBIWSovXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIG1hcmdpbjogNDBweCAyMHB4IDQwcHggMjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgICMzOWFjZTc7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogQU5JTUFUSU9OUyAqL1xyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuICAuZmFkZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBcclxuICAuZmFkZUluIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICB9XHJcbiAgXHJcbiAgLyouZmFkZUluLmZpcnN0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfSovXHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5iZ2J0bjAyIGltZ3sgICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAgICAgXHJcbiAgfSBcclxuICBcclxuICAvKnNvY2lhbCBpY29uKi9cclxuICAuc29jaWFsX2ljb24gc3BhbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICNGRkMzMTI7XHJcbiAgfVxyXG4gICAgXHJcbiAgLnNvY2lhbF9pY29uIHNwYW46aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDIzLCAyMDMsIDI0OCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICAgXHJcblxyXG4gIC5zb2NpYWxfaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgfVxyXG4gICAgICBcclxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG4gIC5hbHF1aWxlcy1sb2dpbntcclxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5wYXNzd29yZC1hbHF1aWxlcmVze1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IHVuc2V0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login',
                templateUrl: 'login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");





class RegisterComponent {
    constructor(userService) {
        this.userService = userService;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log('loginForm', this.registerForm.value);
        this.userService.createUser(this.registerForm.value).toPromise()
            .then((resp) => {
            console.log('respuesta', resp);
            if (resp == null || resp.length == 0) {
                console.log('Algo ha pasado');
            }
        })
            .then(() => {
            console.log('segunda respuesta');
        })
            .catch(error => {
            console.error('error algo ha ocurrido', error);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 11, vars: 1, consts: [[1, "alquiles-login", 2, "background-image", "url('assets/static/images/bg_1.jpg')"], [1, "container", 2, "margin-top", "100px"], [1, "wrapper", "fadeInDown"], ["id", "formContent"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "username", "name", "username", "formControlName", "name", "placeholder", "Username", 1, "fadeIn", "second"], ["type", "text", "id", "email", "name", "email", "formControlName", "email", "placeholder", "email", 1, "fadeIn", "second"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", "placeholder", "Password", 1, "fadeIn", "third", "psswdInput", "password-alquileres"], ["type", "submit", "value", "Register", 1, "fadeIn", "fourth"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["a[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n}\r\n  \r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n}\r\n  \r\n.ErrorMessage[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n  \r\n\r\n  \r\n\r\n  \r\n\r\n  \r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n#formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n  \r\n#formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n  \r\n\r\n  \r\nh2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n  \r\nh2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n\r\n  \r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 40px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color:   #39ace7;\r\n  }\r\n  \r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n  \r\ninput[type=text][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 10px 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 10px;\r\n    width: 80%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n\r\n  \r\n\r\n  \r\n.fadeInDown[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n  \r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n\r\n  \r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n.fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n  \r\n\r\n  \r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n  \r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n  \r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n  \r\n\r\n  \r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n  \r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n  \r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n  \r\n.bgbtn02[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{     \r\n    margin-bottom: 10px;     \r\n    margin-right: 10px;     \r\n  }\r\n  \r\n\r\n  \r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 10px;\r\n    color: #FFC312;\r\n  }\r\n  \r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\r\n    color: rgb(23, 203, 248);\r\n    cursor: pointer;\r\n  }\r\n  \r\n.social_icon[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 5px;\r\n  }\r\n  \r\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    background-color: #FFC312;\r\n    color: black;\r\n    border:0 !important;\r\n  }\r\n  \r\n\r\n  \r\n*[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n  \r\n#icon[_ngcontent-%COMP%] {\r\n    width:60%;\r\n  }\r\n  \r\n.alquiles-login[_ngcontent-%COMP%]{\r\n      min-height: 100vh;\r\n  }\r\n  \r\n.password-alquileres[_ngcontent-%COMP%]{\r\n    background: #f6f6f6;\r\n    border: none;\r\n    border-radius: 4px;\r\n    width: 80%;\r\n    padding: 10px 16px;\r\n    margin: 10px;\r\n    height: 40px;\r\n    font-size: unset;\r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsVUFBVTs7QUFFVjs7Ozs7Ozs7SUFRSTs7QUFJRixjQUFjOztBQUVkO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsNEJBQTRCO0VBQzlCOztBQUlBLFNBQVM7O0FBRVQ7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsOENBQThDO0lBRTlDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFLM0IsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBS0Usc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBSUEsZUFBZTs7QUFFZix1Q0FBdUM7O0FBQ3ZDO0lBQ0Usa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtJQUNFLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBOzs7O0lBSUU7O0FBRUY7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDJCQUEyQjtJQUUzQixtQkFBbUI7RUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztJQUNFLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7QUFFQSxjQUFjOztBQUNkO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7O0FBR0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7RUFDVjs7QUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7QUFFQSxXQUFXOztBQUVYO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtJQUNFLFNBQVM7RUFDWDs7QUFDQTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuICBcclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuLkVycm9yTWVzc2FnZXtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiAgXHJcbi8qIEJBU0lDICovXHJcblxyXG4vKmh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL2JnXzEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH0qL1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIFNUUlVDVFVSRSAqL1xyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtQ29udGVudCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Gb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIFRBQlMgKi9cclxuICBcclxuICBoMi5pbmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgaDIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEZPUk0gVFlQT0dSQVBIWSovXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIG1hcmdpbjogNDBweCAyMHB4IDQwcHggMjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgICMzOWFjZTc7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogQU5JTUFUSU9OUyAqL1xyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuICAuZmFkZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBcclxuICAuZmFkZUluIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICB9XHJcbiAgXHJcbiAgLyouZmFkZUluLmZpcnN0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfSovXHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5iZ2J0bjAyIGltZ3sgICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAgICAgXHJcbiAgfSBcclxuICBcclxuICAvKnNvY2lhbCBpY29uKi9cclxuICAuc29jaWFsX2ljb24gc3BhbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICNGRkMzMTI7XHJcbiAgfVxyXG4gICAgXHJcbiAgLnNvY2lhbF9pY29uIHNwYW46aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDIzLCAyMDMsIDI0OCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICAgXHJcblxyXG4gIC5zb2NpYWxfaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgfVxyXG4gICAgICBcclxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG4gIC5hbHF1aWxlcy1sb2dpbntcclxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5wYXNzd29yZC1hbHF1aWxlcmVze1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IHVuc2V0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/property-upload/propertyUpload.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/property-upload/propertyUpload.component.ts ***!
  \*************************************************************/
/*! exports provided: PropertyUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyUploadComponent", function() { return PropertyUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_advertisement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/advertisement.service */ "./src/app/service/advertisement.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @covalent/core/dialogs */ "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-dialogs.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");














function PropertyUploadComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r56, " ");
} }
function PropertyUploadComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", property_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", property_r57, " ");
} }
function PropertyUploadComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rooms_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rooms_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rooms_r58, " ");
} }
function PropertyUploadComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bathrooms_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bathrooms_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bathrooms_r59, " ");
} }
class PropertyUploadComponent {
    constructor(router, advertisementService, activatedRoute, dialog, alert, _dialogService, loginService) {
        this.router = router;
        this.advertisementService = advertisementService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.alert = alert;
        this._dialogService = _dialogService;
        this.loginService = loginService;
        this.progres = 0;
        this.typeSelect = ['Venta', 'Alquiler'];
        this.propertySelect = ['Piso', 'Casa', 'Local'];
        this.roomsSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.bathroomsSelect = [1, 2, 3, 4, 5, 6];
        this.advertisement = { type: '', property: '', rooms: 0, bathrooms: 0, squareMeters: 0, location: '', address: '', price: 0, picture: '', images: [], comments: [] };
    }
    ngOnInit() {
        /*if(this.loginService.getRolUserLoged()!=2){
            this.router.navigate(['mainPage']);
        }
        this.advertisementService.getAdvertisements().subscribe(
          advertisement => this.advertisement = advertisement,
          error => console.log(error)
        );*/
    }
    newAdvertisement() {
        this.router.navigate(['/advertisement/new']);
    }
    selectPicture(event) {
        this.selectedFile = event.target.files[0];
        this.progres = 0;
        console.log(this.selectedFile);
        if (this.selectedFile.type.indexOf('image') < 0) {
            this.selectedFile = null;
        }
    }
    uploadPicture() {
        if (!this.selectedFile) {
            console.log;
        }
        else {
            this.advertisementService.uploadFile(this.selectedFile, this.advertisement.id)
                .subscribe(event => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    this.progres = Math.round((event.loaded / event.total) * 100);
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                    let response = event.body;
                    this.advertisement = response.concept;
                }
            });
        }
    }
    addAdvertisement() {
        this.advertisementService.addAdvertisement(this.advertisement, this.id).subscribe((res) => {
            this.router.navigate(['/home']);
            //this.listAdvertisements = res;
            //this.listAdvertisements = (this.listAdvertisements);
            //console.log(this.advertisement);
        }, (error) => console.error('error creating new advertisement: ' + error));
        //error1 => console.log(error1)
        //this.dialogRefConcept.close();
    }
}
PropertyUploadComponent.ɵfac = function PropertyUploadComponent_Factory(t) { return new (t || PropertyUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"])); };
PropertyUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropertyUploadComponent, selectors: [["propertyUpload"]], decls: 56, vars: 12, consts: [[1, "myBody"], [1, "myContainer"], ["id", "content", 1, "align-middle", "justify-content-center"], ["id", "submitAdvertisementButton", 1, "text-center", "witt"], ["action", "/property-upload", "method", "post", "enctype", "multipart/form-data"], [1, "botonDesp1"], ["name", "tipo", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "propiedad", 3, "ngModel", "ngModelChange"], ["name", "habitaciones", 3, "ngModel", "ngModelChange"], ["name", "ba\u00F1os", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Metros cuadrados:", "name", "name", "max", "800", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Introduzca la Localidad:", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Introduzca el precio del anuncio:", "name", "name", "min", "0", "max", "2000000", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Introduzca la direcci\u00F3n:", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["for", "file"], ["required", "", "type", "file", "id", "file", "name", "file", "multiple", ""], ["type", "submit", 3, "click"], [3, "value"]], template: function PropertyUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PUBLICAR ANUNCIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tipo de anuncio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tipo de anuncio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyUploadComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.advertisement.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PropertyUploadComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tipo de vivienda:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tipo de vivienda:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyUploadComponent_Template_mat_select_ngModelChange_20_listener($event) { return ctx.advertisement.property = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PropertyUploadComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "N\u00BA de habitaciones:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "N\u00BA de habitaciones:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyUploadComponent_Template_mat_select_ngModelChange_27_listener($event) { return ctx.advertisement.rooms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PropertyUploadComponent_mat_option_28_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "N\u00BA de Ba\u00F1os:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "N\u00BA de ba\u00F1os:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyUploadComponent_Template_mat_select_ngModelChange_34_listener($event) { return ctx.advertisement.bathrooms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PropertyUploadComponent_mat_option_35_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Metros cuadrados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyUploadComponent_Template_input_ngModelChange_39_listener($event) { return ctx.advertisement.squareMeters = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Introduzca la Localidad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyUploadComponent_Template_input_ngModelChange_43_listener($event) { return ctx.advertisement.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Introduzca el precio del anuncio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyUploadComponent_Template_input_ngModelChange_47_listener($event) { return ctx.advertisement.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Introduzca la direcci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyUploadComponent_Template_input_ngModelChange_51_listener($event) { return ctx.advertisement.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Select image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyUploadComponent_Template_input_click_55_listener() { return ctx.addAdvertisement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.property);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.propertySelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.rooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roomsSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.bathrooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bathroomsSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.squareMeters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.address);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: [".myBody[_ngcontent-%COMP%]{\r\n  background-image: url('bg_1.jpg');\r\n}\r\n\r\n.myContainer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 200px;\r\n    \r\n  }\r\n\r\n#content[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    visibility: none;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 600px;\r\n    position: relative;\r\n    padding: 30px;\r\n    box-shadow: 100 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n    background:#ffffff;\r\n  }\r\n\r\n.textarea[_ngcontent-%COMP%]{\r\n    background-color: #f6f6f6 !important;\r\n    border:none;\r\n    border-bottom: 2px solid cornflowerblue;\r\n    resize: vertical;\r\n    border-radius: 4px;\r\n    width:400px;\r\n    height: 111px;\r\n  }\r\n\r\n.botonDesp0[_ngcontent-%COMP%]{\r\n    font-style: oblique;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    position: relative;\r\n    left: -10px;\r\n    height:20px; }\r\n\r\n.botonDesp[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    position: relative;\r\n    left: -10px;\r\n    height:20px; }\r\n\r\n.botonDesp1[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    position: relative;\r\n    top: 35px;\r\n    left: 5px;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    height: 0px;\r\n    width: 30%;\r\n    margin-left: -10px; }\r\n\r\n.botonDesp2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    position: relative;\r\n    top: 20px;\r\n    left: 200px;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    height: 0px;\r\n    width: 30%; }\r\n\r\n.vertical-center[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        position: absolute;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n      }\r\n\r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n        background-color: #56baed;\r\n        border: none;\r\n        color: white;\r\n        padding: 15px 80px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        text-transform: uppercase;\r\n        font-size: 13px;\r\n        box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n        border-radius: 5px 5px 5px 5px;\r\n        margin: 40px 20px 40px 20px;\r\n        transition: all 0.3s ease-in-out;\r\n      }\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n        background-color:   #39ace7;\r\n      }\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n        transform: scale(0.95);\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHktdXBsb2FkL3Byb3BlcnR5VXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBOEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjOztFQUVoQjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFFYiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7RUFDZjs7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVyxFQUFFOztBQUVmO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVyxFQUFFOztBQUdmO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0IsRUFBRTs7QUFFdEI7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVSxFQUFFOztBQUVaO1FBQ0ksU0FBUztRQUNULGtCQUFrQjtRQUNsQixRQUFRO1FBRVIsMkJBQTJCO01BQzdCOztBQUVBO1FBQ0UseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixlQUFlO1FBRWYsOENBQThDO1FBRTlDLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFLM0IsZ0NBQWdDO01BQ2xDOztBQUVBO1FBQ0UsMkJBQTJCO01BQzdCOztBQUVBO1FBS0Usc0JBQXNCO01BQ3hCIiwiZmlsZSI6InNyYy9hcHAvcHJvcGVydHktdXBsb2FkL3Byb3BlcnR5VXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlCb2R5e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iZ18xLmpwZ1wiKTtcclxufVxyXG5cclxuLm15Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwMHB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAjY29udGVudCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgdmlzaWJpbGl0eTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMTAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC50ZXh0YXJlYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTFweDtcclxuICB9XHJcbiAgLmJvdG9uRGVzcDB7XHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICBoZWlnaHQ6MjBweDsgfVxyXG5cclxuICAuYm90b25EZXNwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICBoZWlnaHQ6MjBweDsgfVxyXG4gIFxyXG5cclxuICAuYm90b25EZXNwMXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4OyB9XHJcbiAgICBcclxuICAuYm90b25EZXNwMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgd2lkdGg6IDMwJTsgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNDBweCAyMHB4IDQwcHggMjBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgICMzOWFjZTc7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICB9XHJcbiAgICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'propertyUpload',
                templateUrl: './propertyUpload.component.html',
                styleUrls: ['./propertyUpload.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"] }, { type: _auth_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/advertisement.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/advertisement.service.ts ***!
  \**************************************************/
/*! exports provided: AdvertisementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementService", function() { return AdvertisementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
const GET_ADVERTISEMENT = BASE_URL + "/advertisements/";
const DELETE_ADVERTISEMENT = BASE_URL + "/advertisements/";
const CREATE_ADVERTISEMENT = "https://localhost:8443" + BASE_URL + "/advertisements/";
//const URL = '/api/recommended/';
const URL = 'https://localhost:8443/api/advertisements/';
class AdvertisementService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = 'https://localhost:8443/api/advertisements/';
    }
    handleError(error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    }
    uploadFile(file, id) {
        let formData = new FormData();
        formData.append("file", file);
        formData.append("id", id);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', `${this.urlEndPoint}/images`, formData, {
            reportProgress: true
        });
        return this.http.request(req);
    }
    getAdvertisements() {
        return this.http.get(URL + 'list').pipe(
        /*catchError((error) => this.handleError(error))
        */ );
    }
    getAdvertisement(id) {
        return this.http.get(GET_ADVERTISEMENT + id, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
    }
    addAdvertisement(advertisement, id) {
        const body = JSON.stringify(advertisement);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', });
        return this.http.post(CREATE_ADVERTISEMENT, body, { headers })
            .pipe(
        //map(response => response),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.handleError(error)));
    }
    deleteAdvertisement(id) {
        return this.http.delete(DELETE_ADVERTISEMENT + id)
            .pipe(
        //catchError(err => this.handleError(err))
        );
    }
}
AdvertisementService.ɵfac = function AdvertisementService_Factory(t) { return new (t || AdvertisementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AdvertisementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdvertisementService, factory: AdvertisementService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertisementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/auth/auth.user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/auth/auth.user.service.ts ***!
  \***************************************************/
/*! exports provided: AuthUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUserService", function() { return AuthUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthUserService {
    constructor() {
    }
    canActivate(route, state) {
        console.log('role', localStorage.getItem('role'));
        if (localStorage.getItem('role')) {
            try {
                let role = localStorage.getItem('role');
                if (role.localeCompare('ROLE_USER') == 0 || role.localeCompare('ROLE_ADMIN') == 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (error) {
                return false;
            }
        }
        return false;
    }
}
AuthUserService.ɵfac = function AuthUserService_Factory(t) { return new (t || AuthUserService)(); };
AuthUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthUserService, factory: AuthUserService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/blog.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/blog.service.ts ***!
  \*****************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






const BASE_URL = "https://localhost:8443/api";
const GET_BLOG = BASE_URL + "/blogs/";
const GET_BLOGS = BASE_URL + "/blogs";
const DELETE_BLOG = BASE_URL + "/blogs/";
const CREATE_BLOG = BASE_URL + "/concept/";
class BlogService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = 'https://localhost:8443/api/blogs/';
        this.blog = [];
    }
    handleError(error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Server error (' + error.status + '): ' + error);
    }
    /* , { withCredentials: true } */
    getBlog(id) {
        return this.http.get(GET_BLOG + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.handleError(error)));
    }
    /* , { withCredentials: true } */
    getBlogs(page, quantity) {
        return this.http.get(GET_BLOGS + "?page=" + page + "&number=" + quantity)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => this.handleError(error)));
    }
    addBlog(blog, id) {
        const body = JSON.stringify(blog);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(CREATE_BLOG + id, body, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.handleError(error)));
    }
    deleteBlog(id) {
        return this.http.delete(DELETE_BLOG + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => this.handleError(err)));
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/book.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/book.service.ts ***!
  \*****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const URL = '/api/books/';
class BookService {
    constructor(http) {
        this.http = http;
    }
    getBooks() {
        return this.http.get(URL, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleError(error)));
    }
    getBook(id) {
        return this.http.get(URL + id, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleError(error)));
    }
    saveBook(book) {
        const body = JSON.stringify(book);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        if (!book.id) {
            return this.http
                .post(URL, body, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleError(error)));
        }
        else {
            return this.http
                .put(URL + book.id, body, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleError(error)));
        }
    }
    removeBook(book) {
        return this.http
            .delete(URL + book.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleError(error)));
    }
    handleError(error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Server error (' + error.status + '): ' + error);
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/search.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/search.service.ts ***!
  \*******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchService {
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserService {
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/usuario.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/usuario.service.ts ***!
  \********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






class UsuarioService {
    constructor(http) {
        this.http = http;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_1__["url_base"];
        this.logueado = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
    }
    comprobarLogin() {
        if (localStorage.getItem('role') != null) {
            this.logueado.next(1);
        }
    }
    /**
     * para realizar un login
     *
     * @param {User} user
     * @returns {Observable<any>}
     * @memberof UsuarioService
     */
    logIn(user) {
        let auth = window.btoa(user.name + ':' + user.password);
        // console.log('auth', auth );
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + auth,
            'X-Requested-With': 'XMLHttpRequest',
        });
        localStorage.setItem('auth', auth);
        //return this.http.get(this.url + 'loginTres?email=' + user.name + '&password=' + user.password );
        return this.http.get(this.url + 'login?email=' + user.name + '&password=' + user.password, { headers });
    }
    logOut() {
        //return this.http.get(this.url + 'loginTres?email=' + user.name + '&password=' + user.password );
        return this.http.get(this.url + 'logout');
    }
    /*  public loginCorrecto(numero: number) {
       console.log('numero', numero);
       this.logueado.next(numero);
     }
    */
    getUSer(id) {
        // https://localhost:8443/api/users/1
        return this.http.get(this.url + 'users/' + id);
    }
    createUser(user) {
        return this.http.post(this.url + 'users/create', user);
    }
    addFovrites(id, id_advfo) {
        return this.http.get(this.url + 'users/addfavo?id=' + id + '&id_advfo=' + id_advfo);
    }
    removeFavorites(id, id_advfo) {
        return this.http.get(this.url + 'users/removeFavo?id=' + id + '&id_advfo=' + id_advfo);
    }
    //https://localhost:8443/api/advertisements/list
    getAddvertisement() {
        return this.http.get(this.url + 'users/favourites?page=0&number=10');
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: '/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map