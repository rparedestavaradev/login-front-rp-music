import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from '../../core/shared/shared.module';
import { LoginService } from 'src/app/services/login.service';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundRoutingModule,
  ],
  providers: [
    { provide: LoginServiceAdapter, useClass: LoginService }
  ]
})
export class PageNotFoundModule { }
