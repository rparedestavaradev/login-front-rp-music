import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './core/shared/shared.module';
import { DetailAppComponent } from './core/shared/detail-app/detail-app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    DetailAppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
