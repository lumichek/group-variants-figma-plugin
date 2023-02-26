import { COLUMNS_GAP_FIELD, ROWS_GAP_FIELD } from '../../../common/constants';
import {
  TBorders,
  SortDirections,
  TPropertiesMap,
  TDirections,
  TPropertiesValues,
  TVariant,
  TGaps,
  Size
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

export function fillDirections(
  properties: Array<keyof TPropertiesMap>, direction: SortDirections
): TDirections {
  return properties.reduce((directions: TDirections, property) => {
    directions[property] = direction;

    return directions;
  }, {});
}

export function findVariantByIndex(variants: TVariant[], rowIndex: number, columnIndex: number) {
  return variants.find(({rowIndex: variantRowIndex, columnIndex: variantColumnIndex}) =>
    variantRowIndex === rowIndex && variantColumnIndex === columnIndex)
}

export function moveVariants(variants: TVariant[], gaps: TGaps): Size {
  let rowIndex = 1;
  let columnIndex = 1;

  const root = findVariantByIndex(variants, rowIndex, columnIndex);

  let currentVariant = root;

  let rowsHeight = 0;
  let columnsWidth = 0;

  let maxRowHeight = 0;
  let maxColumnWidth = 0;

  let rowsHeightAcc = gaps[COLUMNS_GAP_FIELD];
  let columnsWidthAcc = gaps[ROWS_GAP_FIELD];

  // Calculate only y coordinate
  while (currentVariant) {
    const {variant: node, rowGap} = currentVariant;

    if (node.height > maxRowHeight) {
      maxRowHeight = node.height;
    }

    node.y = rowsHeightAcc + rowGap;
    // console.log(currentVariant, rowsHeightAcc, rowGap);

    currentVariant = findVariantByIndex(variants, rowIndex, columnIndex + 1);

    if (!currentVariant) {
      rowIndex++;
      columnIndex = 1;
      rowsHeightAcc += maxRowHeight;
      maxRowHeight = 0;
      rowsHeight = rowsHeightAcc + rowGap;
      currentVariant = findVariantByIndex(variants, rowIndex, columnIndex);
    } else {
      columnIndex++;
    }
  }

  rowIndex = 1;
  columnIndex = 1;
  currentVariant = root;

  // Calculate only x coordinate
  while (currentVariant) {
    const {variant: node, columnGap} = currentVariant;

    if (node.width > maxColumnWidth) {
      maxColumnWidth = node.width;
    }

    node.x = columnsWidthAcc + columnGap;

    currentVariant = findVariantByIndex(variants, rowIndex + 1, columnIndex);

    if (!currentVariant) {
      columnIndex++;
      rowIndex = 1;
      columnsWidthAcc += maxColumnWidth;
      maxColumnWidth = 0;
      columnsWidth = columnsWidthAcc + columnGap;
      currentVariant = findVariantByIndex(variants, rowIndex, columnIndex);
    } else {
      rowIndex++;
    }
  }

  return {
    width: columnsWidth + gaps[ROWS_GAP_FIELD],
    height: rowsHeight + gaps[COLUMNS_GAP_FIELD]
  };
}
