import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/home/home.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MyAccountComponent } from './components/my-account/my-account.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MyAccountComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, TabMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
