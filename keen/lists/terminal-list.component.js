System.register(["angular2/core", "angular2/router", "../services/terminal.service", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, router_1, terminal_service_1, http_1;
    var TerminalListComponent;
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
            }],
        execute: function() {
            /**
             * Created by chalaki on 5/10/16.
             */
            TerminalListComponent = (function () {
                function TerminalListComponent(_tService, _params) {
                    this._tService = _tService;
                    this._params = _params;
                    this.isRequesting = true;
                    this.searchKey = null;
                    this.details = [];
                    this.searchKey = _params.get('searchKey');
                }
                TerminalListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.fetchLists();
                    setTimeout(function () { return _this.isRequesting = false; }, 3000);
                };
                TerminalListComponent.prototype.fetchLists = function () {
                    var _this = this;
                    this._tService.getTerminals(this.searchKey).subscribe(function (data) {
                        _this.details = data.data;
                    });
                };
                TerminalListComponent = __decorate([
                    core_1.Component({
                        selector: "search-result",
                        templateUrl: "../../pages/terminalList.html",
                        providers: [terminal_service_1.TerminalService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [terminal_service_1.TerminalService, router_1.RouteParams])
                ], TerminalListComponent);
                return TerminalListComponent;
            }());
            exports_1("TerminalListComponent", TerminalListComponent);
        }
    }
});
//# sourceMappingURL=terminal-list.component.js.map