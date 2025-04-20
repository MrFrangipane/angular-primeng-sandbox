import {Inject, Injectable} from '@angular/core';
import {FeatureDefinition} from './feature-definition.dataclass';
import {UrlParametersService} from '../url-parameters.service';
import {AuthorizationComponent} from '../authorization/feature/authorization.component';
import {AuthorizationServiceInterface, AuthorizationServiceToken} from '../authorization/authorization.interface';


@Injectable({
  providedIn: 'root'
})

export class FeatureManagerService {

  private currentFeatureId: string | null = null;
  private featureDefinitions: FeatureDefinition[] = [];
  private homeFeature: FeatureDefinition | undefined;
  private authorizationComponent: any = AuthorizationComponent;

  constructor(
    @Inject(AuthorizationServiceToken) protected authorizationService: AuthorizationServiceInterface,
    private urlParametersService: UrlParametersService,
  ) {
    this.currentFeatureId = this.urlParametersService.getValue('currentFeature', "");
  }

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
    if (!this.authorizationService.hasEnoughRights()) {
      return this.authorizationComponent;
    }
    let featureDefinition = this.getAuthorizedFeatures().find(definition => definition.id === this.currentFeatureId);
    if (featureDefinition) {
      return featureDefinition.component;
    }

    this.setCurrentFeatureById(this.homeFeature!.id);
    return this.homeFeature!.component;
  }

  getCurrentFeatureId(): string | null {
    return this.currentFeatureId;
  }

  setCurrentFeatureById(featureId: string) {
    this.currentFeatureId = featureId;
    this.urlParametersService.updateUrlParameters({ currentFeature: this.currentFeatureId });
  }
}
