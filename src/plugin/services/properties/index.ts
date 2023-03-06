import {
  TVariantsParent,
  TPropertiesList,
  TPropertiesMap,
  TPropertiesType,
  PropertiesListType,
  PropertiesMapType
} from '../../../common/types';
import { mapProperties, mapPropertiesToList } from "./mapper";

export function extractPropertiesFromComponent(
  component: TVariantsParent, type: typeof PropertiesListType
  ): TPropertiesList;
export function extractPropertiesFromComponent(
  component: TVariantsParent, type: typeof PropertiesMapType
  ): TPropertiesMap;
export function extractPropertiesFromComponent(
  component: TVariantsParent, type: TPropertiesType
  ): TPropertiesList | TPropertiesMap {
  const rawProperties: ComponentPropertyDefinitions = component.componentPropertyDefinitions;

  if (type === PropertiesListType) {
    return mapPropertiesToList(rawProperties);
  }

  return mapProperties(rawProperties);
}