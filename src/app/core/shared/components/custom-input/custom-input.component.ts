import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.sass']
})
export class CustomInputComponent implements OnInit {

  @Input() label_description: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() value: string | undefined;
  @Input() inputType: string = 'input';
  @Input() isPassword: boolean = false;
  @Input() class_icon: string = '';
  @Input() class_icon_visibility: string = '';
  
  INPUT: string = 'input';
  PASSWORD: string = 'password';
  currentType: string = this.INPUT;
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleInputType() {
    if(!this.isPassword) return
    this.show = !this.show;
    this.inputType = (this.inputType === this.INPUT)?this.PASSWORD:this.INPUT;
  }

}
