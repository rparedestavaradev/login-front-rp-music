import { NgModule } from '@angular/core';
import { RecoverPasswordComponent } from './recover-password.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  declarations: [
    RecoverPasswordComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ]
})
export class RecoverPasswordModule { }
