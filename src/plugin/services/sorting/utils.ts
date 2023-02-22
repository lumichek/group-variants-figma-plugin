import { DEFAULT_GAP } from '../../../common/constants';
import {
  TBorders,
  SortDirections,
  TPropertiesMap,
  TDirections,
  TPropertiesValues,
  TVariant,
  TGaps
} from './../../../common/types';

export function findNextVariant(variants: ComponentNode[]) {
  return function(borders: TBorders): ComponentNode {
    const {xFrom, yFrom, xBefore, yBefore} = borders;

    let result: ComponentNode = null;
    let xMin = Number.MAX_SAFE_INTEGER;
    let yMin = Number.MAX_SAFE_INTEGER;

    for (const variant of variants) {
      if (
        variant.x > xFrom &&
        variant.y > yFrom &&
        variant.x <= xBefore &&
        variant.y <= yBefore &&
        variant.x <= xMin &&
        variant.y <= yMin
        ) {
        result = variant;
        xMin = variant.x;
        yMin = variant.y;
      }
    }

    return result;
  }
};

export function compareProperties(properties: TPropertiesMap) {
  return function(
    rootPropertiesValues: TPropertiesValues,
    currentPropertiesValues: TPropertiesValues | undefined
  ) {
    if (!currentPropertiesValues) {
      return [];
    }

    const keys: string[] = [];

    for(const key of Object.keys(properties)) {
      if (rootPropertiesValues[key] !== currentPropertiesValues[key]) {
        keys.push(key);
      }
    }

    return keys;
  }
}

export function collectProperties(
  compareFn: (a: TPropertiesValues, b: TPropertiesValues) => string[],
  root: ComponentNode,
  variant: ComponentNode | null
) {
  return compareFn(root.variantProperties, variant?.variantProperties);
}

export function collectGaps(directions: TDirections, variants: ComponentNode[]): TGaps {
  const gaps = {};

  for (let i = 0; i < variants.length; i++) {
    for (let j = i + 1; j < variants.length; j++) {
      const aVariant = variants[i];
      const bVariant = variants[j];
      const {variantProperties: aVariantProperties} = aVariant;
      const {variantProperties: bVariantProperties} = bVariant;

      Object.keys(directions).forEach((propertyKey) => {
        if (aVariantProperties[propertyKey] === bVariantProperties[propertyKey]) {
          return;
        }

        let gap = 0;

        if (directions[propertyKey] === SortDirections.COLUMNS) {
          gap = Math.abs(aVariant.x - bVariant.x) -
          (aVariant.x > bVariant.x ? bVariant.width : aVariant.width);
        } else {
          gap = Math.abs(aVariant.y - bVariant.y) -
          (aVariant.y > bVariant.y ? bVariant.height : aVariant.height);
        }

        if (!gaps[propertyKey]) {
          gaps[propertyKey] = gap;
        } else if (gap > 0) {
          gaps[propertyKey] = Math.min(gap, gaps[propertyKey]);
        }
      });
    }
  }

  return gaps;
}

export function fillDirections(
  properties: Array<keyof TPropertiesMap>, direction: SortDirections
): TDirections {
  return properties.reduce((directions: TDirections, property) => {
    directions[property] = direction;

    return directions;
  }, {});
}

export function moveVariants(variants: TVariant[]): void {
  console.log('VARIANTS MOVED', variants);
  const gap = DEFAULT_GAP;
  const {variant: root} = variants[0];
  const {width, height} = root;

  for (const variant of variants) {
    const {variant: node, rowIndex, columnIndex, rowGap, columnGap} = variant;

    node.x = gap + (width + columnGap) * (columnIndex - 1);
    node.y = gap + (height + rowGap) * (rowIndex - 1);
  }
}

export function resizeVariantsParent(node: ComponentSetNode, variants: TVariant[]): void {
  const gap = DEFAULT_GAP;
  const {variant: root} = variants[0];
  const {width: variantWidth, height: variantHeight} = root;
  let width = 0;
  let height = 0;

  for (const variant of variants) {
    const {rowIndex, columnIndex, rowGap, columnGap} = variant;

    width = Math.max((variantWidth + columnGap) * columnIndex + gap, width);
    height = Math.max((variantHeight + rowGap) * rowIndex + gap, height);
  }

  node.resizeWithoutConstraints(width, height);
}
