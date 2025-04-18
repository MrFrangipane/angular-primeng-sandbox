import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {FeatureManagerService} from '../../services/feature-manager.service';


@Component({
  selector: 'app-main-layout',
  imports: [
    Button
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})

export class MainLayoutComponent {

  constructor(
    protected featureManagerService: FeatureManagerService
  ) {}

}
