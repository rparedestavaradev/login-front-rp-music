import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.sass',
})
export class RecoverPasswordComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  title: string = "Recover Password";
  message_alert: string = "You are going to recive a message in your email with the instructiona to go";
  recover_form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
  })

  get email(): any { return this.recover_form.get('email'); }

  sendForm() {
    // console.log(this.recover_form)
  }

}
