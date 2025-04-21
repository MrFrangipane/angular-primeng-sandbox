import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthorizationInfo} from './authorization-info.dataclass';


export interface AuthorizationServiceInterface {
  isLoading(): Observable<boolean>;
  getInfo(): AuthorizationInfo;
  login(): void;
  logout(): void;
}


export const authorizationServiceInterfaceInjectionToken = new InjectionToken<AuthorizationServiceInterface>('AuthorizationService');
