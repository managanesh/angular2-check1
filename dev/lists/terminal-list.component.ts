/**
 * Created by chalaki on 5/11/16.
 */
import {Component, OnInit} from "angular2/core";
import {RouteConfig, RouteParams} from "angular2/router";
import {TerminalService} from "../services/terminal.service";
import {ResultDetails} from "../search/terminal-list";
import {HTTP_PROVIDERS} from "angular2/http";
/**
 * Created by chalaki on 5/10/16.
 */

@Component({
    selector: "search-result",
    templateUrl: "../../pages/terminalList.html",
    providers: [TerminalService,HTTP_PROVIDERS]
})

export class TerminalListComponent implements OnInit {
    public isRequesting = true;
    public searchKey = null;

    public details:ResultDetails [] = [];

    constructor(private _tService:TerminalService,
                private _params:RouteParams) {
        this.searchKey = _params.get('searchKey');
    }

    ngOnInit():any {
        this.fetchLists();
        setTimeout(()=>this.isRequesting = false, 3000);
    }

    fetchLists() {
        this._tService.getTerminals(this.searchKey).subscribe(data => {
                   this.details = data.data;

        });
    }
}
