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
  console.log(componentSet);
  const [root] = variants;
  const propertiesList = fetchProperties(componentSet, PropertiesListType);
  const propertiesMap = fetchProperties(componentSet, PropertiesMapType);
  const {directions, gaps} = sortProperties(variants, propertiesMap);
  const {name: propertiesString} = root;
  const propertiesOrders = propertiesString.split(', ');

  let propertiesListSorted = [];

  for (const propertyData of propertiesOrders) {
    const [propertyKey] = propertyData.split('=');

    propertiesListSorted.push(propertiesList.find(({key}) => key === propertyKey));
  }

  if (propertiesListSorted.length < propertiesList.length) {
    propertiesListSorted = propertiesList;
  }

  return {
    properties: propertiesListSorted,
    directions,
    gaps
  };
}
