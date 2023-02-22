import {
  SortDirections,
  TBorders,
  TDirections,
  TPropertiesMap
} from "../../../common/types";
import { collectProperties, compareProperties, fillDirections, findNextVariant } from "./utils";

export function sortProperties(variants: ComponentNode[], properties: TPropertiesMap) {
  let sortDirections: TDirections = {};
  const borders: TBorders = {
    xFrom: 0,
    yFrom: 0,
    xBefore: Number.MAX_SAFE_INTEGER,
    yBefore: Number.MAX_SAFE_INTEGER
  };
  const next = findNextVariant(variants);

  const root = next(borders);
  const {height, width} = root;

  let currentColumnBorders = borders;
  let currentColumnVariant = root;

  let currentRowBorders = borders;
  let currentRowVariant = root;

  while (currentColumnVariant || currentRowVariant) {
    currentColumnBorders = {
      ...currentColumnBorders,
      xFrom: currentColumnBorders.xFrom + width,
      yBefore: height
    };
    currentRowBorders = {
      ...currentRowBorders,
      yFrom: currentRowBorders.yFrom + height,
      xBefore: width
    };
    const comparator = compareProperties(properties);
    const columnProperties = collectProperties(comparator, root, currentColumnVariant);
    const rowsProperties = collectProperties(comparator, root, currentRowVariant);

    sortDirections = {
      ...sortDirections,
      ...fillDirections(rowsProperties, SortDirections.ROWS),
      ...fillDirections(columnProperties, SortDirections.COLUMNS),
    };

    currentColumnVariant = currentColumnVariant && next(currentColumnBorders);
    currentRowVariant = currentRowVariant && next(currentRowBorders);
  }

  for(const property of Object.keys(properties)) {
    if (!sortDirections.hasOwnProperty(property)) {
      sortDirections[property] = SortDirections.ROWS;
    }
  }

  return sortDirections;
}