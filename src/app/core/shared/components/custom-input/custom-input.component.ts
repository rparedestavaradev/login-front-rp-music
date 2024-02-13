import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {

  @Input() label_description: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() value: string | undefined;
  @Input() inputType: string = 'input';
  @Input() isPassword: boolean = false;
  @Input() class_icon: string = '';
  @Input() class_icon_visibility: string = '';
  @Input() color: string = '#363636';
  @Input() form: FormGroup = new FormGroup({});
  @Input() formControlName: string = '';
  
  INPUT: string = 'input';
  PASSWORD: string = 'password';
  currentType: string = this.INPUT;
  show: boolean = false;

  constructor() { }

  get invalid_(): any { return this.form.get(this.formControlName)?.invalid; }
  get dirtyOrTouched(): any { return this.form.dirty || this.form.touched; }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    // console.log("writeValue")
    // console.log(obj)
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    // console.log("registerOnChange")

    // console.log(fn)
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // console.log("registerOnTouched")

    // console.log(fn)

    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // console.log("setDisabledState")
    // console.log(isDisabled)

    // throw new Error('Method not implemented.');
  }

  toggleInputType() {
    if(!this.isPassword) return
    this.show = !this.show;
    this.inputType = (this.inputType === this.INPUT)?this.PASSWORD:this.INPUT;
  }

}
