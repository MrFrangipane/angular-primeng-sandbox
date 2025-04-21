import { Injectable } from '@angular/core';
import {AuthorizationServiceInterface} from '../core/services/authorization/authorization.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthorizationInfo} from '../core/services/authorization/authorization-info.dataclass';


@Injectable({
  providedIn: 'root'
})

export class DemoAuthorizationService implements AuthorizationServiceInterface {

  private _isLoggedIn: boolean = false;
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {
    setTimeout(() => {
      this._isLoading.next(false);
    }, 1000);
  }

  isLoading(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  getInfo(): AuthorizationInfo {
    if (!this._isLoggedIn) {
      return new AuthorizationInfo();
    }
    let info = new AuthorizationInfo();
    info.isLoggedIn = true;
    info.userRoles = ['role-a', 'role-b'];
    return info;
  }

  login() {
    this._isLoading.next(true);
    setTimeout(() => {
      this._isLoggedIn = true;
      this._isLoading.next(false);
    }, 1000);
  }

  logout() {
    this._isLoading.next(true);
    setTimeout(() => {
      this._isLoggedIn = false;
      this._isLoading.next(false);
    }, 1000);
  }
}
