import { Component, OnInit, VERSION } from '@angular/core';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  environment: string = environment.descriptionEnvironment;
  version: string = VERSION.full;
  forgot_password: string = 'Forgot password';
  description_recover_password: string = "Recover password";
  register_message: string = "If you don’t have an accounte, you can register at";
  description_to_register: string = "Register User";

  constructor() { }

  ngOnInit(): void {
  }

}
