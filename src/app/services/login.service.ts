import { Injectable } from '@angular/core';
import { LoginServiceAdapter } from '../adapters/login-service.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { LoginInterface } from '../features/register/interfaces/register.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends LoginServiceAdapter {

  constructor(private httpClientService: HttpClient) {
    super();
  }

  login(value_form: LoginInterface): Observable<any> {
    const url: string = environment.apiURL + "login";
    return this.httpClientService.post(url, value_form);
  }
  
  register(): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
