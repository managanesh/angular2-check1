import {Component} from 'angular2/core';
import {KeenHeaderComponent} from "./header/header.component";
import {FooterCmpnt} from "./footer/footer.component";
import { ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {GlobalSearchComponent} from "./search/global-search.component";
import {GlobalSearchResultsComponent} from "./search/search-result.component";
import {TerminalListComponent} from "./lists/terminal-list.component";

@Component({
    selector: 'keen-app',
    templateUrl: './pages/keen.html',
    directives: [KeenHeaderComponent, FooterCmpnt,ROUTER_DIRECTIVES],


})
@RouteConfig([
    {path: '/search', component: GlobalSearchComponent, name: 'GlobalSearch', useAsDefault: true },
    {path: '/searchResults', component: GlobalSearchResultsComponent, name: 'SearchResults' },
    {path: '/terminals', component: TerminalListComponent, name: 'TerminalList'}
])

export class KeenComponent {

   
    constructor() {

    }

    
}