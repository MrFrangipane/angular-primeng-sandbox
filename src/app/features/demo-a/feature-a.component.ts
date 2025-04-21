import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {FeatureDefinition} from '../../core/services/feature-manager/feature-definition.dataclass';
import { AbstractFeature } from '../../core/features/feature.abstract';
import {InputText} from 'primeng/inputtext';
import {UrlParametersService} from '../../core/services/url-parameters.service';


@Component({
  selector: 'app-feature-a',
  imports: [
    FormsModule,
    InputText
  ],
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.css'
})

export class FeatureAComponent extends AbstractFeature {

  word: string = '';
  inputText: string = "";

  // constructor example
  constructor(urlParametersService: UrlParametersService) {
    super(urlParametersService);
  }

  override getRegisteredUrlParameterNames(): string[] {
    return ['inputText']
  }

  override onInit() {
    this.inputText = this.urlParametersService.getValue('inputText', String) ?? ''

    setTimeout(() => {
      for (let i = 0; i < 1000; i++) {
        this.word += 'delayed multiple Hello World ';
      }
    }, 500);

  }

  onInputTextChange($event: Event) {
    this.urlParametersService.setValue(
      'inputText',
      this.inputText
    )
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
