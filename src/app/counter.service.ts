import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeCounter = 0;
  inActiveCounter = 0;

  constructor() { }

  onUserActivated() {
    this.activeCounter++;
    console.log('Activated: ' + this.activeCounter);
  }
  onUserDeactivated() {
    this.inActiveCounter++;
    console.log('Dectivated: ' + this.inActiveCounter);
  }
}
