import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { RouteComponent } from 'vue-router';

export type TFAIcon = string | string[] | IconDefinition | object;

export interface IFormStep {
  title: string;
  icon?: TFAIcon;
  component: RouteComponent;
}
