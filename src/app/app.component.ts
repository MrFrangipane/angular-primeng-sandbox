import { Component } from '@angular/core';
import {FeatureManagerService} from './services/feature-manager.service';
import {MainLayoutComponent} from './widgets/main-layout/main-layout.component';
import {NgComponentOutlet} from '@angular/common';


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
    protected featureManagerService: FeatureManagerService
  ) {}
}
