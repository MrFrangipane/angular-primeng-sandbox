import {Injectable} from '@angular/core';
import {FeatureDefinition} from './feature-definition.dataclass';
import {UrlParametersService} from '../url-parameters.service';


@Injectable({
  providedIn: 'root'
})

export class FeatureManagerService {

  private currentFeatureId: string | null = null;
  private featureDefinitions: FeatureDefinition[] = [];

  constructor(
    private urlParametersService: UrlParametersService,
  ) {}

  setAvailableFeatures(definitions: FeatureDefinition[]) {
    this.featureDefinitions = definitions;
  }

  getAvailableFeatures(): FeatureDefinition[] {
    return this.featureDefinitions;
  }

  getCurrentFeatureComponent(): any | null {
    // Todo move this part to when page is loaded
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('currentFeature')) {
      this.currentFeatureId = urlParams.get('currentFeature');
    }

    return this.featureDefinitions.find(definition => definition.id === this.currentFeatureId)!.component;
  }

  setCurrentFeatureById(featureId: string) {
    this.currentFeatureId = featureId;
    this.urlParametersService.updateUrlParameters({ currentFeature: this.currentFeatureId });
  }

}
