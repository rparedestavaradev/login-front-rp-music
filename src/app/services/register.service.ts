import { Injectable } from '@angular/core';
import { LoginServiceAdapter } from '../adapters/login-service.adapter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends LoginServiceAdapter {

  constructor() { super()}

  override login(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  override register(): Observable<any> {
    console.log("Register 2")
    throw new Error('Method not implemented.');
  }
}
