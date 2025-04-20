import { Component, OnInit } from '@angular/core';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';

import {FeatureDefinition} from '../../core/services/feature-manager/feature-definition.dataclass';
import {SharedStateService} from '../../core/services/shared-state.service';


@Component({
  selector: 'app-feature-b',
  imports: [
    Slider,
    FormsModule
  ],
  templateUrl: './feature-b.component.html',
  styleUrl: './feature-b.component.css'
})

export class FeatureBComponent implements OnInit {
  word: string = '';

  constructor(
    protected sharedStateService: SharedStateService,
  ) {}

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
