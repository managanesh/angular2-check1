import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
/**
 * Created by chalaki on 5/11/16.
 */

@Injectable()
export class MachinesService{
    constructor(private _http:Http){}
    
    getCountofMachines(searchKey: string){
      return  this._http.get('http://localhost:3000/data/machines-count.json').map(res => res.json());
    }
}