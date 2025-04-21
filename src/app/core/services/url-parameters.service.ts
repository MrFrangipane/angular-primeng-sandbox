import {Injectable, Type} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UrlParametersService {

  private parameterNames: string[] = ['currentFeature']

  constructor() { }

  setValue(parameterName: string, value: any) {
    this.throwOnParameterName(parameterName)
    if (value === null) {
      value = ''
    }

    const url = new URL(window.location.href);
    url.searchParams.set(parameterName, String(value))
    window.history.pushState({}, '', url)
  }

  // TODO find out how to type hint the type
  getValue(parameterName: string, type: any): any {
    this.throwOnParameterName(parameterName)
    const url = new URL(window.location.href)
    const value = url.searchParams.get(parameterName)
    if (value !== null) {
      if (value === '') {
        return null
      }
      if (type === Number) {
        return parseInt(value)
      }
      return new type(value)
    }
    return null
  }

  resetParameterRegistration() {
    this.parameterNames = ['currentFeature']
  }

  registerParameterNames(parameterNames: string[]) {
    this.parameterNames = this.parameterNames.concat(parameterNames)
  }

  cleanUrl() {
    const url = new URL(window.location.href);
    let searchParamsCopy = new URLSearchParams(url.searchParams);
    searchParamsCopy.forEach((value, name, searchParams) => {
      if (!this.parameterNames.includes(name)) {
        url.searchParams.delete(name);
      }
    })
    window.history.pushState({}, '', url);
  }

  private throwOnParameterName(parameterName: string) {
    if (!this.parameterNames.includes(parameterName)) {
      throw new Error(`Parameter ${parameterName} is not registered`)
    }
  }
}
