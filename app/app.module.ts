import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { /*TEX:\bfs*/AppComponent/*TEX:\bfe*/ } from './app.component';

@NgModule({
  imports:      [BrowserModule],/*TEX:\bfs*/
  declarations: [AppComponent],
  bootstrap:    [AppComponent]/*TEX:\bfe*/
})
export class AppModule { }
