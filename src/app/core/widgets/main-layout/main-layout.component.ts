import {Component, Inject} from '@angular/core';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {Fluid} from 'primeng/fluid';

import {FeatureManagerService} from '../../services/feature-manager/feature-manager.service';
import {ScreenService} from '../../services/screen.service';
import {
  AuthorizationServiceInterface,
  authorizationServiceInterfaceInjectionToken
} from '../../services/authorization/authorization.interface';



@Component({
  selector: 'app-main-layout',
  imports: [
    Button,
    Tooltip,
    Fluid,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})

export class MainLayoutComponent {

  constructor(
    protected featureManagerService: FeatureManagerService,
    protected screenService: ScreenService,
    @Inject(authorizationServiceInterfaceInjectionToken) protected authorizationService: AuthorizationServiceInterface,
  ) {}

}
