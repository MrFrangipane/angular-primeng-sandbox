import {InjectionToken} from '@angular/core';

export interface AuthorizationServiceInterface {
  getUserRoles(): string[];
  isLoggedIn(): boolean;
  login(): void;
  logout(): void;
  hasEnoughRights(): boolean;
}


export const authorizationServiceInterfaceInjectionToken = new InjectionToken<AuthorizationServiceInterface>('AuthorizationService');
