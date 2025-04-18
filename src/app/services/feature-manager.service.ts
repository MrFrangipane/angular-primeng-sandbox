import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureManagerService {

  currentFeature: 'feature-a' | 'feature-b' = 'feature-a';

  constructor() { }

  toggleFeature() {
    if (this.currentFeature === 'feature-a') {
      this.currentFeature = 'feature-b';
    } else {
      this.currentFeature = 'feature-a';
    }
  }
}
