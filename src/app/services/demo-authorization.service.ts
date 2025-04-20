import { Injectable } from '@angular/core';
import {AuthorizationServiceInterface} from '../core/services/authorization/authorization.interface';



@Injectable({
  providedIn: 'root'
})

export class DemoAuthorizationService implements AuthorizationServiceInterface {

  _isLoggedIn: boolean = false;

  constructor() { }

  getUserRoles(): string[] {
    if (!this._isLoggedIn) {
      return [];
    } else {
      return ['role-a', 'role-b'];
    }
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  login() {
    this._isLoggedIn = true;
  }

  logout() {
    this._isLoggedIn = false;
  }

  hasEnoughRights() {
    return (this._isLoggedIn && this.getUserRoles().length > 0);
  }
}
