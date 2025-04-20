import {Component, HostListener} from '@angular/core';
import {MainLayoutComponent} from './widgets/main-layout/main-layout.component';
import {NgComponentOutlet} from '@angular/common';
import {FeatureManagerService} from './services/feature-manager/feature-manager.service';
import {FeatureAComponent} from './features/feature-a/feature-a.component';
import {FeatureBComponent} from './features/feature-b/feature-b.component';
import {ScreenService} from './services/screen.service';


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
    featureManagerService.setAvailableFeatures([
      {id: 'feature-a', name: 'Feature A', icon:'pi pi-home', component: FeatureAComponent},
      {id: 'feature-b', name: 'Feature B', icon:'pi pi-clock', component: FeatureBComponent},
    ])
    this.screenService.update();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenService.update();
  }
}
