/**
 * Created by chalaki on 5/8/16.
 */
import {Component} from 'angular2/core';
import {TopNavCompnt} from "./top-nav.component";

@Component({
    selector: 'keen-header',
    templateUrl: 'pages/keen-header.html',
    directives: [TopNavCompnt]
    
})
export class KeenHeaderComponent{
    //#TODO: should be retrieved from service.
    public appTitle = 'Project Keen'
    public userDetails ={name: 'Ganesh babu V'}
}