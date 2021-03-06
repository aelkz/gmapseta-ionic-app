"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var app_component_1 = require("./app.component");
var hello_ionic_1 = require("../pages/hello-ionic/hello-ionic");
var item_details_1 = require("../pages/item-details/item-details");
var list_1 = require("../pages/list/list");
var status_bar_1 = require("@ionic-native/status-bar");
var splash_screen_1 = require("@ionic-native/splash-screen");
var best_route_module_1 = require("../components/best-route/best-route.module");
// /--------------------------------------------------\
// | Application Module [app.module.ts]               |
// |--------------------------------------------------|
// | Add your application modules here!               |
// \--------------------------------------------------/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.MyApp,
            hello_ionic_1.HelloIonicPage,
            item_details_1.ItemDetailsPage,
            list_1.ListPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            best_route_module_1.BestRouteModule,
            ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.MyApp,
            hello_ionic_1.HelloIonicPage,
            item_details_1.ItemDetailsPage,
            list_1.ListPage
        ],
        providers: [
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen,
            { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
