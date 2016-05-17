import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {TerminalService} from "../services/terminal.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {CategoryCount} from "../services/CategoryCount";
import {MachinesService} from "../services/machines.service";
import {CategoryENUM} from "../search/search-category.enum";
import {Observable} from 'rxjs/Observable';

@Component({
    selector: "search-result",
    templateUrl: "./pages/searchResults.html",
    providers: [TerminalService, MachinesService, HTTP_PROVIDERS]
})

export class GlobalSearchResultsComponent implements OnInit {

    public isRequesting = true;

    public searchKey = null;

    public countByCategory:CategoryCount[] = [];

    public message:string;

    public requestStack:string[] = [];

    public searchCat = null;


    constructor(private _params:RouteParams, private _router:Router,
                private _tService:TerminalService,
                private _mService:MachinesService) {
        this.searchKey = _params.get('searchKey');
        this.searchCat = _params.get('category');

    }

    ngOnInit():any {
        this.message = 'Fetching Results for ';

        this.fetchResultCounts();
        this.raiseRequestsByCriteria();
        setTimeout(()=>this.isRequesting = false, 1000);
    }

    fetchResultCounts() {


    }

    raiseRequestsByCriteria() {
        
        if (this.searchCat == CategoryENUM.getCode(CategoryENUM.All)) {

            var cats = CategoryENUM.getCategories();

            Observable.fromArray(cats).subscribe(data=> {
                   
                    switch (data['code']) {

                        case CategoryENUM.getCode(CategoryENUM.Terminals):
                        {
                            this.requestStack.push('terminals')
                            
                            this._tService.getCountofTerminals(this.searchKey).subscribe(data => {

                                data.method = 'terminals';
                                setTimeout(
                                    ()=> {
                                        this.countByCategory.push(data);
                                        this.requestStack.pop();
                                        this.message = 'Results Found For ';

                                    }, 2000);

                            });
                            break;
                        }
                        case CategoryENUM.getCode(CategoryENUM.Machines):
                        {
                            this.requestStack.push('machines');
                            this._mService.getCountofMachines(this.searchKey).subscribe(data => {
                                data.method = 'machines';
                                setTimeout(
                                    ()=> {
                                        this.countByCategory.push(data);
                                        this.requestStack.pop();
                                    }, 3000);


                            });

                        }
                    }
                }
            );


        }
    }

    loadFullResults(category) {
        this.isRequesting = true;
        setTimeout(()=>this.isRequesting = false, 5000);
        this._router.parent.navigate(['TerminalList', {searchKey: this.searchKey}]);

    }
}
