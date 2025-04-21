import {Component, Inject, InjectionToken, Input} from '@angular/core';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {Fluid} from 'primeng/fluid';

import {FeatureManagerService} from '../../services/feature-manager/feature-manager.service';
import {ScreenService} from '../../services/screen.service';
import {
  AuthorizationServiceInterface,
  authorizationServiceInterfaceInjectionToken
} from '../../services/authorization/authorization.interface';
import {AsyncPipe} from '@angular/common';


export const ApplicationTitleInjectionToken = new InjectionToken<string>('ApplicationTitleInjectionToken');


@Component({
  selector: 'app-main-layout',
  imports: [
    Button,
    Tooltip,
    Fluid,
    AsyncPipe,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})

export class MainLayoutComponent {
  @Input() sidebarClass: string = "";

  constructor(
    protected featureManagerService: FeatureManagerService,
    protected screenService: ScreenService,
    @Inject(authorizationServiceInterfaceInjectionToken) protected authorizationService: AuthorizationServiceInterface,
    @Inject(ApplicationTitleInjectionToken) protected applicationTitle: string
  ) {}
}
