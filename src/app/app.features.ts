import {FeatureDefinition} from './services/feature-manager/feature-definition.dataclass';
import {FeatureAComponent} from './features/feature-a/feature-a.component';
import {FeatureBComponent} from './features/feature-b/feature-b.component';


export const features: FeatureDefinition[] = [
  {id: 'feature-a', name: 'Feature A', icon:'pi pi-home', component: FeatureAComponent},
  {id: 'feature-b', name: 'Feature B', icon:'pi pi-clock', component: FeatureBComponent},
]
