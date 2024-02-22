import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  imports: [
    NgxLoadingModule.forRoot({}),
  ]
})
export class LoaderModule { }
