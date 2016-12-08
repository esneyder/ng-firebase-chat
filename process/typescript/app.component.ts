import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FooterComponent} from './footer.component'; /** invoking footer component */
import {NoteComponent} from './note.component';

@Component({
  selector:'my-app',
  directives: [FooterComponent,NoteComponent],
  templateUrl:'partials/app.html' /** app.html has my own structure having angular2 component selectors */
})
export class AppComponent {

}

@Component({
  selector:'my-footer',
  directives: [FooterComponent,NoteComponent],
  templateUrl:'partials/footer.html'
})

export class AppComponent1 {

}

bootstrap(AppComponent)
bootstrap(AppComponent1)
