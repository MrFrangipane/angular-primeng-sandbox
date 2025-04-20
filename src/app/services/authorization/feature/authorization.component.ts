import {Component, Inject} from '@angular/core';
import {Button} from 'primeng/button';
import {AuthorizationServiceInterface, AuthorizationServiceToken} from '../authorization.interface';


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
    @Inject(AuthorizationServiceToken) protected authorizationService: AuthorizationServiceInterface,
  ) {}
}
