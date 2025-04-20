import {Injectable} from '@angular/core';
import {FeatureDefinition} from './feature-definition.dataclass';


@Injectable({
  providedIn: 'root'
})
export class FeatureManagerService {

  private currentFeatureId: string | null = null;
  private featureDefinitions: FeatureDefinition[] = [];

  constructor() { }

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
    this.updateUrlParameters({ currentFeature: this.currentFeatureId });
  }

  private updateUrlParameters(params: { [key: string]: string }) {
    const url = new URL(window.location.href);

    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, value);
      }
    });

    window.history.pushState({}, '', url);
  }

}
