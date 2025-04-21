import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {FeatureDefinition} from '../../core/services/feature-manager/feature-definition.dataclass';
import {UrlParametersService} from '../../core/services/url-parameters.service';
import {DemoWidgetComponent} from '../../widgets/demo-widget/demo-widget.component';


@Component({
  selector: 'app-feature-a',
  imports: [
    FormsModule,
    DemoWidgetComponent
  ],
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.css'
})

export class FeatureAComponent implements OnInit {
  word: string = '';

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
