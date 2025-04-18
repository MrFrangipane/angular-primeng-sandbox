import { Injectable } from '@angular/core';

import {FeatureAComponent} from '../features/feature-a/feature-a.component';
import {FeatureBComponent} from '../features/feature-b/feature-b.component';


@Injectable({
  providedIn: 'root'
})
export class FeatureManagerService {

  currentFeature: string | null = null;

  constructor(
  ) {}

  toggleFeature() {
    if (this.currentFeature === 'feature-a') {
      this.currentFeature = 'feature-b';
    } else {
      this.currentFeature = 'feature-a';
    }
    this.updateUrlParameters({ currentFeature: this.currentFeature });
  }

  getCurrentFeatureComponent() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('currentFeature')) {
      this.currentFeature = urlParams.get('currentFeature');
    }

    if (this.currentFeature === 'feature-a') {
      return FeatureAComponent;
    } else {
      return FeatureBComponent;
    }
  }

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
}
