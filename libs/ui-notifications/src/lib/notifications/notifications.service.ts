import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private notify: MatSnackBar) { }

  notification(message: string) {
    this.notify.open(message, 'X', { duration: 2500 });
  }
}
