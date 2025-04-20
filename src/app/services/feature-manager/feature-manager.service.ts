import {Injectable} from '@angular/core';
import {FeatureDefinition} from './feature-definition.dataclass';
import {UrlParametersService} from '../url-parameters.service';
import {DemoAuthorizationService} from '../authorization/demo.service';


@Injectable({
  providedIn: 'root'
})

export class FeatureManagerService {

  private currentFeatureId: string | null = null;
  private featureDefinitions: FeatureDefinition[] = [];
  private homeFeature: FeatureDefinition | undefined;

  constructor(
    private authorizationService: DemoAuthorizationService,
    private urlParametersService: UrlParametersService,
  ) {}

  setAvailableFeatures(definitions: FeatureDefinition[]) {
    this.featureDefinitions = definitions;
    this.homeFeature = this.featureDefinitions.find(definition => definition.isHomeFeature);
    if (!this.homeFeature) {
      throw new Error('No home feature defined');
    }
  }

  getAuthorizedFeatures(): FeatureDefinition[] {
    const roles: string[] = this.authorizationService.getUserRoles();
    return this.featureDefinitions.filter(definition => roles.includes(definition.authorizedForUserRole));
  }

  getCurrentFeatureComponent(): any | null {
    // Todo move this part to when page is loaded ?
    this.currentFeatureId = this.urlParametersService.getValue('currentFeature', "");
    let featureDefinition = this.getAuthorizedFeatures().find(definition => definition.id === this.currentFeatureId);
    if (featureDefinition) {
      return featureDefinition.component;
    }

    this.setCurrentFeatureById(this.homeFeature!.id);
    return this.homeFeature!.component;
  }

  setCurrentFeatureById(featureId: string) {
    this.currentFeatureId = featureId;
    this.urlParametersService.updateUrlParameters({ currentFeature: this.currentFeatureId });
  }

}
