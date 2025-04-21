import { Component, OnInit } from '@angular/core';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';

import {FeatureDefinition} from '../../core/services/feature-manager/feature-definition.dataclass';
import {SharedStateService} from '../../core/services/shared-state.service';
import {UrlParametersService} from '../../core/services/url-parameters.service';
import {DemoWidgetComponent} from '../../widgets/demo-widget/demo-widget.component';


@Component({
  selector: 'app-feature-b',
  imports: [
    FormsModule,
    DemoWidgetComponent
  ],
  templateUrl: './feature-b.component.html',
  styleUrl: './feature-b.component.css'
})

export class FeatureBComponent implements OnInit {
  word: string = '';

  ngOnInit() {
    setTimeout(() => {
      this.word = 'delayed Hello World';
    }, 500);
  }
}


export const featureBDefinition: FeatureDefinition = {
  id: 'feature-b',
  name: 'Feature B',
  icon: 'pi pi-clock',
  component: FeatureBComponent,
  authorizedForUserRole: 'role-a',
  isHomeFeature: false
};
