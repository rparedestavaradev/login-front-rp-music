import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleServiceAdapter } from 'src/app/adapters/title-service-adapter';
import {
  MatDialog,
} from '@angular/material/dialog';

import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
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
  src_logo: string = '/assets/logo/logo-rp-music-bg.png';
  register_link: string = "/register";
  login_form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(titleService: TitleServiceAdapter, private dialog: MatDialog) {
    titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

  submitForm(login_form: FormGroup): void {
  }

  recoverPassword(): void {
    this.dialog.open(RecoverPasswordComponent);
  }
}
