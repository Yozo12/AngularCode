import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Matteo } from './app.matteo';

@NgModule({
  declarations: [
    AppComponent,Matteo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,Matteo]
})
export class AppModule { }
