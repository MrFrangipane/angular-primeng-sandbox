import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {FeatureManagerService} from '../../services/feature-manager/feature-manager.service';
import {ScreenService} from '../../services/screen.service';
import {Tooltip} from 'primeng/tooltip';
import {Fluid} from 'primeng/fluid';


@Component({
  selector: 'app-main-layout',
  imports: [
    Button,
    Tooltip,
    Fluid,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})

export class MainLayoutComponent {
  constructor(
    protected featureManagerService: FeatureManagerService,
    protected screenService: ScreenService
  ) {}

}
