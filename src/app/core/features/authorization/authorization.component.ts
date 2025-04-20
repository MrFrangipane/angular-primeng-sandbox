import {Component, Inject} from '@angular/core';
import {Button} from 'primeng/button';

import {
  AuthorizationServiceInterface,
  authorizationServiceInterfaceInjectionToken
} from '../../services/authorization/authorization.interface';


@Component({
  selector: 'app-authorization',
  imports: [
    Button
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})

export class AuthorizationComponent {

  constructor(
    @Inject(authorizationServiceInterfaceInjectionToken) protected authorizationService: AuthorizationServiceInterface,
  ) {}
}
