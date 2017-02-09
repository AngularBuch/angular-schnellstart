import { Component } from '@angular/core';

@Component({
  selector: '<TEX>\bfseries my-app</TEX>',
  template: '<h1>{{ title }}</h1>'
})
export class AppComponent {
  title = '<TEX>\bfseries app works!</TEX>';
}
