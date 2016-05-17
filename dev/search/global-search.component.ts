import {Component, OnInit, EventEmitter, Output, Input} from "angular2/core";
import {Http, HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router} from "angular2/router";
import{CategoryENUM} from "../search/search-category.enum";



@Component({
    selector: 'global-search',
    templateUrl: './pages/search.html',
    providers: [HTTP_PROVIDERS]
})
export class GlobalSearchComponent implements OnInit {
    @Output() searchOP = new EventEmitter();
    public isRequesting = true;
    public showLabel = true;
    public categories = CategoryENUM.getCategories();
    
    public category = 'ALL';
    public search = '';
     
    

    constructor(private _http:Http, private _router:Router) {}

    ngOnInit():any {
        setTimeout(()=>this.isRequesting = false,3000);
    }

    onSelect(selCat) {
        this.category = selCat;

    }

    onSearch() {
        this.isRequesting = true;
        setTimeout(()=>this.isRequesting = false, 5000);
        this._router.parent.navigate(['SearchResults', {"category": this.category, "searchKey": this.search}]);


    }

    toggleInputLabel() {

        if (this.search != '') {
            this.showLabel = false;
        } else {
            this.showLabel = true;
        }
    }
}