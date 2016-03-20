import 'es6-shim';
import 'angular2/bundles/angular2-polyfills';
import 'reflect-metadata';
import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
  selector: 'app',
  templateUrl: '../src/partials/main.html'
})

class App{}

bootstrap(App, [])
