import {Component, Inject} from '@angular/core';
import {Button} from 'primeng/button';

import {
  AuthorizationServiceInterface,
  authorizationServiceInterfaceInjectionToken
} from '../../services/authorization/authorization.interface';
import {AsyncPipe} from '@angular/common';
import {ProgressSpinner} from 'primeng/progressspinner';


@Component({
  selector: 'app-authorization',
  imports: [
    Button,
    AsyncPipe,
    ProgressSpinner
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})

export class AuthorizationComponent {

  constructor(
    @Inject(authorizationServiceInterfaceInjectionToken) protected authorizationService: AuthorizationServiceInterface,
  ) {}
}
