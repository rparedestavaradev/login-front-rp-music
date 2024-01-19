import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.sass']
})
export class CustomInputComponent implements OnInit {

  @Input() label_desciption: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() value: string | undefined;
  @Input() type: string | undefined;
  @Input() class_icon: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
