import { Component, OnInit } from '@angular/core';
import { TitleServiceAdapter } from 'src/app/adapters/title-service-adapter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  title: string = "Register RP";

  constructor(titleService: TitleServiceAdapter) { 
    debugger
    titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
