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

  getValue(paramterName: string, defaultValue: any) {
    const url = new URL(window.location.href);
    const value = url.searchParams.get(paramterName);
    if (value !== null) {
      return value;
    }
    return defaultValue;
  }
}
