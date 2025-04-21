import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UrlParametersService {

  constructor() { }

  updateUrlParameters(params: { [key: string]: string }) {
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

  getValue(parameterName: string, defaultValue: any) {
    const url = new URL(window.location.href);
    const value = url.searchParams.get(parameterName);
    if (value !== null) {
      return value;
    }
    return defaultValue;
  }

  setRelevantParameters(parameterNames: string[]) {
    parameterNames.push('currentFeature');

    const url = new URL(window.location.href);
    let searchParamsCopy = new URLSearchParams(url.searchParams);

    searchParamsCopy.forEach((value, name, searchParams) => {
      if (!parameterNames.includes(name)) {
        console.log(`Deleting parameter ${name} from url`);
        url.searchParams.delete(name);
      }
    })
    window.history.pushState({}, '', url);
  }
}
