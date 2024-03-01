import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    SharedModule,
    RegisterRoutingModule,
  ],
  providers: [
    {
      provide: LoginServiceAdapter,
      useClass: RegisterService
    }
  ]
})
export class RegisterModule { }
