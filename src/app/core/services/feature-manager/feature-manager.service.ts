import {Inject, Injectable, Type} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'

import {AuthorizationComponent} from '../../features/authorization/authorization.component'
import {AuthorizationServiceInterface, authorizationServiceInterfaceInjectionToken} from '../authorization/authorization.interface'
import {FeatureDefinition} from './feature-definition.dataclass'
import {UrlParametersService} from '../url-parameters.service'


@Injectable({
  providedIn: 'root'
})

export class FeatureManagerService {

  private currentFeatureId: string | null = null
  private featureDefinitions: FeatureDefinition[] = []
  private homeFeature: FeatureDefinition | undefined
  private authorizationComponent: any = AuthorizationComponent
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true)

  constructor(
    @Inject(authorizationServiceInterfaceInjectionToken) protected authorizationService: AuthorizationServiceInterface,
    private urlParametersService: UrlParametersService,
  ) {
    this.currentFeatureId = this.urlParametersService.getValue('currentFeature', String)

    this.authorizationService.isLoading().subscribe(_ => {
      this._isLoading.next(false)
    });
  }

  isLoading(): Observable<boolean> {
    return this._isLoading.asObservable()
  }

  setAvailableFeatures(definitions: FeatureDefinition[]) {
    this.featureDefinitions = definitions
    this.homeFeature = this.featureDefinitions.find(definition => definition.isHomeFeature)
    if (!this.homeFeature) {
      throw new Error('No home feature defined')
    }
  }

  getAuthorizedFeatures(): FeatureDefinition[] {
    let info = this.authorizationService.getInfo()
    return this.featureDefinitions.filter(
      definition => info.userRoles.includes(definition.authorizedForUserRole)
    )
  }

  // FIXME home component is always returned after login, despite url params !!
  // FIXME use observables otherwise this is called all the time
  getCurrentFeatureComponent(): any | null {
    let  info = this.authorizationService.getInfo()
    if (!info.hasEnoughRights()) {
      return this.authorizationComponent
    }
    let featureDefinition = this.getAuthorizedFeatures().find(definition => definition.id == this.currentFeatureId)
    if (featureDefinition) {
      return featureDefinition.component
    }

    this.setCurrentFeatureById(this.homeFeature!.id)
    return this.homeFeature!.component
  }

  getCurrentFeatureId(): string | null {
    return this.currentFeatureId
  }

  setCurrentFeatureById(featureId: string) {
    this.urlParametersService.resetParameterRegistration()
    this.currentFeatureId = featureId
    this.urlParametersService.setValue('currentFeature', this.currentFeatureId)
  }
}
