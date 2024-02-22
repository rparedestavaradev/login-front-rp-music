import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public show$: Observable<boolean> = this.show.asObservable();

  constructor() { }

  set showValue(newValue: boolean) { this.show.next(newValue) }
  get showCurrentValue(): boolean { return this.show.getValue()}

}
