import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DemoAuthorizationService {

  constructor() { }

  getUserRoles(): string[] {
    return ['role-a', 'role-b'];
  }
}
