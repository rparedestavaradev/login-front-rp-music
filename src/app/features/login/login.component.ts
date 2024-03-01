import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleServiceAdapter } from 'src/app/adapters/title-service-adapter';
import {
  MatDialog,
} from '@angular/material/dialog';

import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
import { LoginService } from 'src/app/services/login.service';
import { LoginInterface } from '../register/interfaces/register.model';
import { LoaderService } from 'src/app/core/shared/services/loader.service';
import { AlertServiceImplement } from 'src/app/adapters/alert-service.adapter';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {

  title: string = "Login RP";
  forgot_password: string = 'Forgot password';
  description_recover_password: string = "Recover password"; 
  register_message: string = "If you don’t have an accounte, you can register at";
  description_to_register: string = "Register User";
  src_logo: string = './assets/logo/logo-rp-music-bg.png';
  register_link: string = "/register";
  login_form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(titleService: TitleServiceAdapter, private dialog: MatDialog, private loginService: LoginService, 
    private loderService: LoaderService, private alertService: AlertServiceImplement) {
    titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

  submitForm(login_form: FormGroup): void {
    const value_form: LoginInterface = this.getDataFromForm(login_form);
    this.loderService.showValue = true;
    this.loginService.login(value_form).subscribe({
      next: (value) => {
        this.alertService.showToast(value.massage);
      },
      error: (error) => {
        this.loderService.showValue = false;
        this.alertService.showToast(error.error.message);
      }, 
      complete: () => this.loderService.showValue = false
      });
  }

  recoverPassword(): void {
    this.dialog.open(RecoverPasswordComponent);
  }

  getDataFromForm(form: FormGroup): LoginInterface {
    const data_form: LoginInterface = form.value as LoginInterface;
    return data_form;
  }
}
