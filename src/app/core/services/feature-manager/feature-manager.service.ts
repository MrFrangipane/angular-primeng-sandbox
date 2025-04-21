import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {AuthorizationComponent} from '../../features/authorization/authorization.component';
import {AuthorizationServiceInterface, authorizationServiceInterfaceInjectionToken} from '../authorization/authorization.interface';
import {FeatureDefinition} from './feature-definition.dataclass';
import {UrlParametersService} from '../url-parameters.service';



@Injectable({
  providedIn: 'root'
})

export class FeatureManagerService {

  private currentFeatureId: string | null = null;
  private featureDefinitions: FeatureDefinition[] = [];
  private homeFeature: FeatureDefinition | undefined;
  private authorizationComponent: any = AuthorizationComponent;
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    @Inject(authorizationServiceInterfaceInjectionToken) protected authorizationService: AuthorizationServiceInterface,
    private urlParametersService: UrlParametersService,
  ) {
    this.currentFeatureId = this.urlParametersService.getValue('currentFeature', "");

    this.authorizationService.isLoading().subscribe(_ => {
      this._isLoading.next(false);
    });
  }

  isLoading(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  setAvailableFeatures(definitions: FeatureDefinition[]) {
    this.featureDefinitions = definitions;
    this.homeFeature = this.featureDefinitions.find(definition => definition.isHomeFeature);
    if (!this.homeFeature) {
      throw new Error('No home feature defined');
    }
  }

  getAuthorizedFeatures(): FeatureDefinition[] {
    return this.featureDefinitions.filter(
      definition => this.authorizationService.getInfo().userRoles.includes(definition.authorizedForUserRole)
    );
  }

  getCurrentFeatureComponent(): any | null {
    if (!this.authorizationService.getInfo().hasEnoughRights()) {
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
