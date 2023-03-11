import { PropertiesListType, PropertiesMapType, TVariantsParent, TVariants } from '../../common/types';
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

export function getPropertiesInfo(variantsParent: TVariantsParent, variants: TVariants) {
  const [root] = variants;
  const propertiesList = fetchProperties(variantsParent, PropertiesListType);
  const propertiesMap = fetchProperties(variantsParent, PropertiesMapType);
  const preparedVariants = variants.map((variant) => {
    return {
      x: variant.x,
      y: variant.y,
      width: variant.width,
      height: variant.height,
      variantProperties: {...variant.variantProperties}
    };
  });
  const {directions, gaps, paddings, valuesOrders} = sortProperties(preparedVariants as TVariants, propertiesMap);
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

  const calculatePaddings = {...paddings};

  calculatePaddings.RIGHT = variantsParent.width - calculatePaddings.RIGHT;
  calculatePaddings.BOTTOM = variantsParent.height - calculatePaddings.BOTTOM;

  return {
    properties: propertiesListSorted,
    directions,
    gaps,
    paddings: calculatePaddings,
    valuesOrders
  };
}
