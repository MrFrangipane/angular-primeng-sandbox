import {Component, HostListener} from '@angular/core'
import {NgComponentOutlet} from '@angular/common'

import {features} from './app.features'
import {MainLayoutComponent} from './core/widgets/main-layout/main-layout.component'
import {FeatureManagerService} from './core/services/feature-manager/feature-manager.service'
import {ScreenService} from './core/services/screen.service'


@Component({
  selector: 'app-root',
  imports: [
    MainLayoutComponent,
    NgComponentOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor(
    protected featureManagerService: FeatureManagerService,
    protected screenService: ScreenService,
  ) {
    featureManagerService.setAvailableFeatures(features)
    this.screenService.update()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenService.update()
  }
}
