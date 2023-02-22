import { TPropertiesList, TPropertiesMap, TPropertiesType, PropertiesListType, PropertiesMapType } from '../../../common/types';
import { mapProperties, mapPropertiesToList } from "./mapper";

export function extractPropertiesFromComponent(
  component: ComponentSetNode, type: typeof PropertiesListType
  ): TPropertiesList;
export function extractPropertiesFromComponent(
  component: ComponentSetNode, type: typeof PropertiesMapType
  ): TPropertiesMap;
export function extractPropertiesFromComponent(
  component: ComponentSetNode, type: TPropertiesType
  ): TPropertiesList | TPropertiesMap {
  const rawProperties: ComponentPropertyDefinitions = component.componentPropertyDefinitions;

  if (type === PropertiesListType) {
    return mapPropertiesToList(rawProperties);
  }

  return mapProperties(rawProperties);
}