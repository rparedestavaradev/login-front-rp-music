import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.sass']
})
export class CustomButtonComponent implements OnInit {

  @Input() description: string | undefined;
  @Input() type: string | undefined;
  @Input() primary: boolean | undefined;
  @Input() secondary: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
