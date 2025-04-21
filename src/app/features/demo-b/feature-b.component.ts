import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {FeatureDefinition} from '../../core/services/feature-manager/feature-definition.dataclass';
import {DemoWidgetComponent} from '../../widgets/demo-widget/demo-widget.component';
import {AbstractFeature} from '../../core/features/feature.abstract';
import {InputText} from 'primeng/inputtext';


@Component({
  selector: 'app-feature-b',
  imports: [
    FormsModule,
    DemoWidgetComponent,
    InputText
  ],
  templateUrl: './feature-b.component.html',
  styleUrl: './feature-b.component.css'
})

export class FeatureBComponent extends AbstractFeature {
  word: string = '';
  inputText: string = '';

  override getRegisteredUrlParameterNames(): string[] {
    return ['inputText']
  }

  override onInit() {
    this.inputText = this.urlParametersService.getValue('inputText', String) ?? ''

    setTimeout(() => {
      this.word = 'delayed Hello World';
    }, 500);
  }

  onInputTextChange($event: Event) {
    this.urlParametersService.setValue(
      'inputText',
      this.inputText
    )
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
