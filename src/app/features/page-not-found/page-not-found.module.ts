import { NgModule } from '@angular/core';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginService } from 'src/app/services/login.service';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';
import { SharedModule } from 'src/app/core/shared/shared.module';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    PageNotFoundRoutingModule,
  ],
  providers: [
    { provide: LoginServiceAdapter, useClass: LoginService }
  ]
})
export class PageNotFoundModule { }
