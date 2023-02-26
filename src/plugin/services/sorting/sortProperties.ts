import { COLUMNS_GAP_FIELD } from './../../../common/constants';
import { ROWS_GAP_FIELD } from "../../../common/constants";
import {
  SortDirections,
  TBorders,
  TDirections,
  TGaps,
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
  const gaps: TGaps = {
    [ROWS_GAP_FIELD]: root.x,
    [COLUMNS_GAP_FIELD]: root.y
  };
  const {height, width} = root;

  let currentColumnBorders = borders;
  let currentColumnVariant = root;

  let currentRowBorders = borders;
  let currentRowVariant = root;

  let prevColumnVariant = root;
  let prevRowVariant = root;

  while (currentColumnVariant || currentRowVariant) {
    currentColumnBorders = {
      ...currentColumnBorders,
      xFrom: currentColumnBorders.xFrom + width,
      yBefore: root.y + height
    };
    currentRowBorders = {
      ...currentRowBorders,
      yFrom: currentRowBorders.yFrom + height,
      xBefore: root.x + width
    };
    const comparator = compareProperties(properties);
    const columnProperties = collectProperties(comparator, root, currentColumnVariant);
    const rowsProperties = collectProperties(comparator, root, currentRowVariant);

    sortDirections = {
      ...fillDirections(rowsProperties, SortDirections.ROWS),
      ...fillDirections(columnProperties, SortDirections.COLUMNS),
      ...sortDirections,
    };

    for (const rowProperty of rowsProperties) {
      if (!gaps[rowProperty]) {
        gaps[rowProperty] =
          currentRowVariant.y - prevRowVariant.y - prevRowVariant.height;
      }
    }

    for (const columnProperty of columnProperties) {
      if (!gaps[columnProperty]) {
        gaps[columnProperty] =
          currentColumnVariant.x - prevColumnVariant.x - prevColumnVariant.width;
      }
    }

    prevColumnVariant = currentColumnVariant;
    prevRowVariant = currentRowVariant;

    currentColumnVariant = currentColumnVariant && next(currentColumnBorders);
    currentRowVariant = currentRowVariant && next(currentRowBorders);
  }

  for(const property of Object.keys(properties)) {
    if (!sortDirections.hasOwnProperty(property)) {
      sortDirections[property] = SortDirections.ROWS;
    }
  }

  return {
    directions: sortDirections,
    gaps
  };
}