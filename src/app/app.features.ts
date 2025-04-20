import {FeatureDefinition} from './services/feature-manager/feature-definition.dataclass';
import {featureADefinition} from './features/feature-a/feature-a.component';
import {featureBDefinition} from './features/feature-b/feature-b.component';
import {featureCDefinition} from './features/feature-c/feature-c.component';


export const features: FeatureDefinition[] = [
  featureADefinition,
  featureBDefinition,
  featureCDefinition
]
