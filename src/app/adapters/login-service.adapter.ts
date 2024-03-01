import { Observable } from "rxjs";
import { LoginInterface, RegisterInterface } from "../features/register/interfaces/register.model";

export abstract class LoginServiceAdapter {
    abstract login(data: LoginInterface): Observable<any>;
    abstract register(data: RegisterInterface): Observable<any>;
}