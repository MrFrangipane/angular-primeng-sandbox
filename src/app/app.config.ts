import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';

import {authorizationServiceInterfaceInjectionToken} from './core/services/authorization/authorization.interface';
import {DemoAuthorizationService} from './services/demo-authorization.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    { provide: authorizationServiceInterfaceInjectionToken, useClass: DemoAuthorizationService }
  ]
};
