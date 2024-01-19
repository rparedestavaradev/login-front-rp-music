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

  constructor() { }

  ngOnInit(): void {
  }

}
