import { Injectable } from '@angular/core';
import { LoginServiceAdapter } from '../adapters/login-service.adapter';
import { Observable, of } from 'rxjs';
import { RegisterInterface } from '../features/register/interfaces/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends LoginServiceAdapter {

  constructor() { super()}

  override login(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  
  override register(data: RegisterInterface): Observable<any> {
    return of(null);
  }
}
