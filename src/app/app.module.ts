import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { SharedModule } from './core/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecoverPasswordModule } from './features/recover-password/recover-password.module';
import { LoaderModule } from './core/shared/components/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    RecoverPasswordModule,
    MatDialogModule,
    AppRoutingModule,
    MatFormFieldModule, MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LoaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
