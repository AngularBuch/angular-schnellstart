import { Component } from '@angular/core';

@Component({
  selector: '<TEX>\bfs</TEX>my-app<TEX>\bfe</TEX>',
  template: '<h1>{{ title }}</h1>'
})
export class AppComponent {
  title = '<TEX>\bfs</TEX>app works!<TEX>\bfe</TEX>';
}
