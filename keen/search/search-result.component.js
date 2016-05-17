System.register(["angular2/core", "angular2/router", "../services/terminal.service", "angular2/http", "../services/machines.service", "../search/search-category.enum", 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, router_1, terminal_service_1, http_1, machines_service_1, search_category_enum_1, Observable_1;
    var GlobalSearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (terminal_service_1_1) {
                terminal_service_1 = terminal_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (machines_service_1_1) {
                machines_service_1 = machines_service_1_1;
            },
            function (search_category_enum_1_1) {
                search_category_enum_1 = search_category_enum_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            GlobalSearchResultsComponent = (function () {
                function GlobalSearchResultsComponent(_params, _router, _tService, _mService) {
                    this._params = _params;
                    this._router = _router;
                    this._tService = _tService;
                    this._mService = _mService;
                    this.isRequesting = true;
                    this.searchKey = null;
                    this.countByCategory = [];
                    this.requestStack = [];
                    this.searchCat = null;
                    this.searchKey = _params.get('searchKey');
                    this.searchCat = _params.get('category');
                }
                GlobalSearchResultsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.message = 'Fetching Results for ';
                    this.fetchResultCounts();
                    this.raiseRequestsByCriteria();
                    setTimeout(function () { return _this.isRequesting = false; }, 1000);
                };
                GlobalSearchResultsComponent.prototype.fetchResultCounts = function () {
                };
                GlobalSearchResultsComponent.prototype.raiseRequestsByCriteria = function () {
                    var _this = this;
                    if (this.searchCat == search_category_enum_1.CategoryENUM.getCode(search_category_enum_1.CategoryENUM.All)) {
                        var cats = search_category_enum_1.CategoryENUM.getCategories();
                        Observable_1.Observable.fromArray(cats).subscribe(function (data) {
                            switch (data['code']) {
                                case search_category_enum_1.CategoryENUM.getCode(search_category_enum_1.CategoryENUM.Terminals):
                                    {
                                        _this.requestStack.push('terminals');
                                        _this._tService.getCountofTerminals(_this.searchKey).subscribe(function (data) {
                                            data.method = 'terminals';
                                            setTimeout(function () {
                                                _this.countByCategory.push(data);
                                                _this.requestStack.pop();
                                                _this.message = 'Results Found For ';
                                            }, 2000);
                                        });
                                        break;
                                    }
                                case search_category_enum_1.CategoryENUM.getCode(search_category_enum_1.CategoryENUM.Machines):
                                    {
                                        _this.requestStack.push('machines');
                                        _this._mService.getCountofMachines(_this.searchKey).subscribe(function (data) {
                                            data.method = 'machines';
                                            setTimeout(function () {
                                                _this.countByCategory.push(data);
                                                _this.requestStack.pop();
                                            }, 3000);
                                        });
                                    }
                            }
                        });
                    }
                };
                GlobalSearchResultsComponent.prototype.loadFullResults = function (category) {
                    var _this = this;
                    this.isRequesting = true;
                    setTimeout(function () { return _this.isRequesting = false; }, 5000);
                    this._router.parent.navigate(['TerminalList', { searchKey: this.searchKey }]);
                };
                GlobalSearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: "search-result",
                        templateUrl: "./pages/searchResults.html",
                        providers: [terminal_service_1.TerminalService, machines_service_1.MachinesService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, terminal_service_1.TerminalService, machines_service_1.MachinesService])
                ], GlobalSearchResultsComponent);
                return GlobalSearchResultsComponent;
            }());
            exports_1("GlobalSearchResultsComponent", GlobalSearchResultsComponent);
        }
    }
});
//# sourceMappingURL=search-result.component.js.map