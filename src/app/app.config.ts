import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {AuthorizationServiceToken} from './services/authorization/authorization.interface';
import {DemoAuthorizationService} from './services/authorization/demo.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    { provide: AuthorizationServiceToken, useClass: DemoAuthorizationService }
  ]
};
