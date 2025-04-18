import { Component } from '@angular/core';
import {FeatureAComponent} from './features/feature-a/feature-a.component';
import {FeatureBComponent} from './features/feature-b/feature-b.component';
import {FeatureManagerService} from './services/feature-manager.service';


@Component({
  selector: 'app-root',
  imports: [
    FeatureAComponent,
    FeatureBComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor(
    protected featureManagerService: FeatureManagerService
  ) {}
}
