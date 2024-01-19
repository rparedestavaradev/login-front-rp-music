import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

  title: string = 'Page Not Found';
  
  constructor(titleService: Title, private loginService: LoginServiceAdapter) { 
    titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.loginService.login().subscribe(res => console.log(res));
  }

}
