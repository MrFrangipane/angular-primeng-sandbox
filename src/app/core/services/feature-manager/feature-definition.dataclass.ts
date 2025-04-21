

export interface FeatureDefinition {
  id: string;
  name: string;
  icon: string;
  component: any;  // todo find out what should be here
  authorizedForUserRole: string;
  isHomeFeature: boolean;
}
