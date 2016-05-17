///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {KeenComponent} from "./keen.component";
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(KeenComponent,[ROUTER_PROVIDERS]);