import { Component, OnInit } from '@angular/core';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  forgot_password: string = 'Forgot password';
  description_recover_password: string = "Recover password";
  register_message: string = "If you don’t have an accounte, you can register at";
  description_to_register: string = "Register User";
  src_logo: string = '/assets/logo/logo-rp-music-bg.png';

  constructor() { }

  ngOnInit(): void {
  }

}
