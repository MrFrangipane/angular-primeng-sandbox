import {InjectionToken} from '@angular/core';

export interface AuthorizationServiceInterface {
  getUserRoles(): string[];
  isLoggedIn(): boolean;
  login(): void;
  logout(): void;
  hasEnoughRights(): boolean;
}


export const AuthorizationServiceToken = new InjectionToken<AuthorizationServiceInterface>('AuthorizationService');
