import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { AddressSearchComponent } from './components/address-search/address-search.component';
import { MauiButtonModule } from './maui/button';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AddressSearchComponent
  ],
  imports: [
    BrowserModule,
    MauiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
