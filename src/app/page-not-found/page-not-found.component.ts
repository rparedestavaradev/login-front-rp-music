import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

  title: string = 'Page Not Found';
  constructor(private titleService: Title) { 
    titleService.setTitle(this.title)
  }

  ngOnInit(): void {
    
  }

}
