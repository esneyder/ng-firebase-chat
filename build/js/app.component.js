System.register(['angular2/core', 'angular2/platform/browser', './footer.component', './note.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, footer_component_1, note_component_1;
    var AppComponent, AppComponent1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (note_component_1_1) {
                note_component_1 = note_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [footer_component_1.FooterComponent, note_component_1.NoteComponent],
                        templateUrl: 'partials/app.html' /** app.html has my own structure having angular2 component selectors */
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            AppComponent1 = (function () {
                function AppComponent1() {
                }
                AppComponent1 = __decorate([
                    core_1.Component({
                        selector: 'my-footer',
                        directives: [footer_component_1.FooterComponent, note_component_1.NoteComponent],
                        templateUrl: 'partials/footer.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent1);
                return AppComponent1;
            }());
            exports_1("AppComponent1", AppComponent1);
            browser_1.bootstrap(AppComponent);
            browser_1.bootstrap(AppComponent1);
        }
    }
});

//# sourceMappingURL=app.component.js.map
