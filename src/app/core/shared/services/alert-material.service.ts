import { Injectable } from '@angular/core';
import { AlertServiceImplement } from 'src/app/adapters/alert-service.adapter';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertMaterialService extends AlertServiceImplement{

  constructor(private _snackBar: MatSnackBar) { 
    super();
  }
  
  override showToast(message: string): void {
    this._snackBar.openFromComponent(AlertComponent, {
      duration: 3000,
      data: message
    });
  }
}
