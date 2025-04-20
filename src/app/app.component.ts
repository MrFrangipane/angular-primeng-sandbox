import {Component, HostListener} from '@angular/core';
import {MainLayoutComponent} from './widgets/main-layout/main-layout.component';
import {NgComponentOutlet} from '@angular/common';
import {FeatureManagerService} from './services/feature-manager/feature-manager.service';
import {ScreenService} from './services/screen.service';
import {features} from './app.features';


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
    protected screenService: ScreenService
  ) {
    featureManagerService.setAvailableFeatures(features);
    this.screenService.update();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenService.update();
  }
}
