import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, MatIconModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.sass',
  styles: `
    :host
      display: flex
  `,
})
export class AlertComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
  snackBarRef = inject(MatSnackBarRef);
}
