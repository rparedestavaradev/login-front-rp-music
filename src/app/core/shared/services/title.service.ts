import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleServiceAdapter } from 'src/app/adapters/title-service-adapter';

@Injectable({
  providedIn: 'root'
})
export class TitleService extends TitleServiceAdapter{

  private title: string = "RP music";
  
  constructor(private titleService: Title) {
    super();
  }

  override setTitle(value: string): void {
    this.title = value;
    this.titleService.setTitle(value);
  }
  override getTitle(): string {
    return this.title;
  }

}