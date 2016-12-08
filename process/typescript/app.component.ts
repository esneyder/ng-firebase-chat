import {Component} from 'angular2/core';
import {FooterComponent} from './footer.component'; /** invoking footer component */

@Component({
  selector:'my-app',
  directives: [FooterComponent],
  templateUrl:'partials/app.html' /** app.html has my own structure having angular2 component selectors */
})

export class AppComponent {

}
