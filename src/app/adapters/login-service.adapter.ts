import { Observable } from "rxjs";

export abstract class LoginServiceAdapter {
    abstract login(): Observable<any>;
    abstract register(): Observable<any>;
}