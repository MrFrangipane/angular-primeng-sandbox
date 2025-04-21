import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FeatureDefinition} from '../../core/services/feature-manager/feature-definition.dataclass';

import {DemoWidgetComponent} from '../../widgets/demo-widget/demo-widget.component';
import {AbstractFeature} from '../../core/features/feature.abstract';


@Component({
  selector: 'app-feature-c',
  imports: [
    FormsModule,
    DemoWidgetComponent
  ],
  templateUrl: './feature-c.component.html',
  styleUrl: './feature-c.component.css'
})

export class FeatureCComponent extends AbstractFeature {
  word: string = '';

  onInit() {
    setTimeout(() => {
      this.word = 'delayed Hello World';
    }, 500);
  }
}


export const featureCDefinition: FeatureDefinition = {
  id: 'feature-c',
  name: 'Feature C',
  icon: 'pi pi-cog',
  component: FeatureCComponent,
  authorizedForUserRole: 'role-b',
  isHomeFeature: false
};
