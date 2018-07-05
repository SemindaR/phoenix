import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { AddressSearchComponent } from './components/address-search/address-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AddressSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
