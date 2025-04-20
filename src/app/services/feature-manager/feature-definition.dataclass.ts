import {Component, Type} from '@angular/core';


export interface FeatureDefinition {
  id: string;
  name: string;
  icon: string;
  component: any;  // todo find out what should be here
}
