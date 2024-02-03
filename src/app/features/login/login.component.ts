import { Component, OnInit } from '@angular/core';
import { TitleServiceAdapter } from 'src/app/adapters/title-service-adapter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string = "";
  title: string = "Login RP";
  password: string = "";
  forgot_password: string = 'Forgot password';
  description_recover_password: string = "Recover password";
  register_message: string = "If you don’t have an accounte, you can register at";
  description_to_register: string = "Register User";
  src_logo: string = '/assets/logo/logo-rp-music-bg.png';

  constructor(titleService: TitleServiceAdapter) {
    titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
