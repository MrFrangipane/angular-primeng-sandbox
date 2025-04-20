import { Component, OnInit } from '@angular/core';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';

import {SharedStateService} from '../../core/services/shared-state.service';
import {FeatureDefinition} from '../../core/services/feature-manager/feature-definition.dataclass';


@Component({
  selector: 'app-feature-a',
  imports: [
    Slider,
    FormsModule
  ],
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.css'
})

export class FeatureAComponent implements OnInit {
  word: string = '';

  constructor(
    protected sharedStateService: SharedStateService,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      for (let i = 0; i < 1000; i++) {
        this.word += 'delayed multiple Hello World ';
      }
    }, 500);
  }
}


export const featureADefinition: FeatureDefinition = {
  id: 'feature-a',
  name: 'Feature A',
  icon: 'pi pi-home',
  component: FeatureAComponent,
  authorizedForUserRole: 'role-a',
  isHomeFeature: true
};
