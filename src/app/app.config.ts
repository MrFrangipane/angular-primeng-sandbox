import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {DemoTheme} from './app.theme';

import {authorizationServiceInterfaceInjectionToken} from './core/services/authorization/authorization.interface';
import {DemoAuthorizationService} from './services/demo-authorization.service';
import {ApplicationTitleInjectionToken} from './core/widgets/main-layout/main-layout.component';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: DemoTheme
      }
    }),
    { provide: authorizationServiceInterfaceInjectionToken, useClass: DemoAuthorizationService },
    { provide: ApplicationTitleInjectionToken, useValue: 'Sandbox Demo' },
  ]
};
