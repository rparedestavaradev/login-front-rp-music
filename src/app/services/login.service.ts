import { Injectable } from '@angular/core';
import { LoginServiceAdapter } from '../adapters/login-service.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends LoginServiceAdapter {

  constructor(private httpClientService: HttpClient) {
    super();
  }

  login(): Observable<any> {
    const url: string = environment.apiURL + "pin";
    return this.httpClientService.get(url);
  }
  
  register(): Observable<any> {
    console.log("Register 1")
    throw new Error('Method not implemented.');
  }
}
