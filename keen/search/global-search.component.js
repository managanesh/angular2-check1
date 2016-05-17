System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map', 'rxjs/Rx', "angular2/router", "../search/search-category.enum"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, search_category_enum_1;
    var GlobalSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_category_enum_1_1) {
                search_category_enum_1 = search_category_enum_1_1;
            }],
        execute: function() {
            GlobalSearchComponent = (function () {
                function GlobalSearchComponent(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                    this.searchOP = new core_1.EventEmitter();
                    this.isRequesting = true;
                    this.showLabel = true;
                    this.categories = search_category_enum_1.CategoryENUM.getCategories();
                    this.category = 'ALL';
                    this.search = '';
                }
                GlobalSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () { return _this.isRequesting = false; }, 3000);
                };
                GlobalSearchComponent.prototype.onSelect = function (selCat) {
                    this.category = selCat;
                };
                GlobalSearchComponent.prototype.onSearch = function () {
                    var _this = this;
                    this.isRequesting = true;
                    setTimeout(function () { return _this.isRequesting = false; }, 5000);
                    this._router.parent.navigate(['SearchResults', { "category": this.category, "searchKey": this.search }]);
                };
                GlobalSearchComponent.prototype.toggleInputLabel = function () {
                    if (this.search != '') {
                        this.showLabel = false;
                    }
                    else {
                        this.showLabel = true;
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], GlobalSearchComponent.prototype, "searchOP", void 0);
                GlobalSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'global-search',
                        templateUrl: './pages/search.html',
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], GlobalSearchComponent);
                return GlobalSearchComponent;
            }());
            exports_1("GlobalSearchComponent", GlobalSearchComponent);
        }
    }
});
//# sourceMappingURL=global-search.component.js.map