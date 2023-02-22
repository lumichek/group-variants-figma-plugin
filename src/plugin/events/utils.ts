import { PropertiesListType, PropertiesMapType } from '../../common/types';
import { fetchProperties, sortProperties } from '../propertiesController';
import { COMPONENT_SET_TYPE } from './../../common/constants';

export function checkSelection(page: PageNode) {
  const {selection} = page;

  if (!selection.length) {
    return false;
  }

  const [selectedNode] = selection;

  if (selectedNode.type !== COMPONENT_SET_TYPE) {
    return false;
  }

  if (selectedNode.children.length < 2) {
    return false;
  }

  return true;
}

export function getPropertiesInfo(componentSet: ComponentSetNode, variants: ComponentNode[]) {
  const propertiesList = fetchProperties(componentSet, PropertiesListType);
  const propertiesMap = fetchProperties(componentSet, PropertiesMapType);
  const propertiesDirections = sortProperties(variants, propertiesMap);

  return {
    properties: propertiesList,
    directions: propertiesDirections
  };
}
