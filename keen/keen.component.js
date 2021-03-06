System.register(['angular2/core', "./header/header.component", "./footer/footer.component", 'angular2/router', "./search/global-search.component", "./search/search-result.component", "./lists/terminal-list.component"], function(exports_1, context_1) {
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
    var core_1, header_component_1, footer_component_1, router_1, global_search_component_1, search_result_component_1, terminal_list_component_1;
    var KeenComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (global_search_component_1_1) {
                global_search_component_1 = global_search_component_1_1;
            },
            function (search_result_component_1_1) {
                search_result_component_1 = search_result_component_1_1;
            },
            function (terminal_list_component_1_1) {
                terminal_list_component_1 = terminal_list_component_1_1;
            }],
        execute: function() {
            KeenComponent = (function () {
                function KeenComponent() {
                }
                KeenComponent = __decorate([
                    core_1.Component({
                        selector: 'keen-app',
                        templateUrl: './pages/keen.html',
                        directives: [header_component_1.KeenHeaderComponent, footer_component_1.FooterCmpnt, router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        { path: '/search', component: global_search_component_1.GlobalSearchComponent, name: 'GlobalSearch', useAsDefault: true },
                        { path: '/searchResults', component: search_result_component_1.GlobalSearchResultsComponent, name: 'SearchResults' },
                        { path: '/terminals', component: terminal_list_component_1.TerminalListComponent, name: 'TerminalList' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], KeenComponent);
                return KeenComponent;
            }());
            exports_1("KeenComponent", KeenComponent);
        }
    }
});
//# sourceMappingURL=keen.component.js.map