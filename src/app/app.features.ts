import { FeatureDefinition } from './core/services/feature-manager/feature-definition.dataclass';
import {featureADefinition} from './features/demo-a/feature-a.component';
import {featureBDefinition} from './features/demo-b/feature-b.component';
import {featureCDefinition} from './features/demo-c/feature-c.component';


export const features: FeatureDefinition[] = [
  featureADefinition,
  featureBDefinition,
  featureCDefinition
]
