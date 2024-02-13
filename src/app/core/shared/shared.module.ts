import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { DetailAppComponent } from './components/detail-app/detail-app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomInputComponent,
    DetailAppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CustomButtonComponent,
    CustomInputComponent,
    DetailAppComponent,
    FooterComponent,
    HeaderComponent,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
