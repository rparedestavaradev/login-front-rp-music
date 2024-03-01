import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleServiceAdapter } from 'src/app/adapters/title-service-adapter';
import { NumerPatterValidator, PasswordMatchValidator, SpecialCharacterPattern, UnUppercase } from 'src/app/core/shared/validators/form.validators';
import { RegisterInterface } from './interfaces/register.model';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  title: string = "Register RP";
  src_logo: string = 'assets/logo/logo-rp-music-bg.png';
  register_form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    secondName: new FormControl(''),
    email: new FormControl('', Validators.required),
    phoneNamber: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, UnUppercase(), Validators.minLength(8), SpecialCharacterPattern(), NumerPatterValidator()]),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: PasswordMatchValidator() });
  
  get password(): any { return this.register_form.get('password'); }
  get dirtyOrTouched(): any { return this.register_form?.dirty || this.register_form?.touched; }

  constructor(titleService: TitleServiceAdapter, private registerFormService: LoginServiceAdapter) { 
    titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }
  
  sendForm(): void {
    const object_form: RegisterInterface = this.getDataFromForm(this.register_form);
    this.registerFormService.register(object_form)
  }

  getDataFromForm(form: FormGroup): RegisterInterface {
    const data_form: RegisterInterface = this.register_form.value as RegisterInterface;
    return data_form;
  }

}
