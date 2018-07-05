import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MauiButtonModule } from './maui/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MauiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
