import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CustomButtonComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CustomButtonComponent,
    CustomInputComponent
  ]
})
export class SharedModule { }
