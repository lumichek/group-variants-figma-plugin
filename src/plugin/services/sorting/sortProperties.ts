import { ROWS_GAP_FIELD, COLUMNS_GAP_FIELD } from "../../../common/constants";
import {
  SortDirections,
  TBorders,
  TDirections,
  TGaps,
  TVariants,
  TPropertiesMap,
  TPropertiesValuesOrders
} from "../../../common/types";
import { collectProperties, compareProperties, fillDirections, findColumnGap, findNextVariant, findRowGap } from "./utils";

export function sortProperties(variants: TVariants, properties: TPropertiesMap) {
  let sortDirections: TDirections = {};
  const borders: TBorders = {
    xFrom: 0,
    yFrom: 0,
    xBefore: Number.MAX_SAFE_INTEGER,
    yBefore: Number.MAX_SAFE_INTEGER
  };
  const next = findNextVariant(variants);

  const rootColumns = next({
    xFrom: 0,
    yFrom: 0,
    xBefore: Number.MAX_SAFE_INTEGER,
    yBefore: Number.MAX_SAFE_INTEGER,
    xMin: true
  });
  const prevRootColumns = next({
    xFrom: 0,
    yFrom: 0,
    xBefore: Number.MAX_SAFE_INTEGER,
    yBefore: rootColumns.y - 1,
    xMin: true,
    yMax: true
  });
  const columnsBordersYFrom = prevRootColumns ? (prevRootColumns.y + prevRootColumns.height) : 0;
  const rootRows = next({
    xFrom: 0,
    yFrom: 0,
    xBefore: Number.MAX_SAFE_INTEGER,
    yBefore: Number.MAX_SAFE_INTEGER,
    yMin: true
  });
  const prevRootRows = next({
    xFrom: 0,
    yFrom: 0,
    xBefore: rootRows.x - 1,
    yBefore: Number.MAX_SAFE_INTEGER,
    yMin: true,
    xMax: true
  });
  const rowsBordersXFrom = prevRootRows ? (prevRootRows.x + prevRootRows.width) : 0;
  const gaps: TGaps = {
    [ROWS_GAP_FIELD]: rootRows.x,
    [COLUMNS_GAP_FIELD]: rootColumns.y
  };

  let currentColumnBorders = borders;
  let currentColumnVariant = rootColumns;

  let currentRowBorders = borders;
  let currentRowVariant = rootRows;

  let prevColumnVariant = rootColumns;
  let prevRowVariant = rootRows;

  let valuesOrders: TPropertiesValuesOrders = {};

  while (currentColumnVariant || currentRowVariant) {
    currentColumnBorders = {
      ...currentColumnBorders,
      xMin: true,
      yFrom: columnsBordersYFrom,
      xFrom: (currentColumnVariant?.x || 0) + (currentColumnVariant?.width || 0)
    };
    currentRowBorders = {
      ...currentRowBorders,
      yMin: true,
      xFrom: rowsBordersXFrom,
      yFrom: (currentRowVariant?.y || 0) + (currentRowVariant?.height || 0)
    };
    const comparator = compareProperties(properties);
    const {
      keys: columnProperties,
      values: columnPropertiesValues,
    } = collectProperties(comparator, rootColumns, currentColumnVariant);
    const {
      keys: rowsProperties,
      values: rowPropertiesValues,
    } = collectProperties(comparator, rootRows, currentRowVariant);

    sortDirections = {
      ...fillDirections(rowsProperties, SortDirections.ROWS),
      ...fillDirections(columnProperties, SortDirections.COLUMNS),
      ...sortDirections,
    };

    for (const propertyKey of rowsProperties) {
      if (!rowPropertiesValues[propertyKey]?.length ||
        sortDirections[propertyKey] === SortDirections.COLUMNS
      ) {
        continue;
      }
      if (!valuesOrders[propertyKey]) {
        valuesOrders[propertyKey] = rowPropertiesValues[propertyKey] || [];
      } else {
        rowPropertiesValues[propertyKey].forEach((val) => {
          if (!valuesOrders[propertyKey].includes(val)) {
            valuesOrders[propertyKey].push(val);
          }
        })
      }
    }

    for (const propertyKey of columnProperties) {
      if (!columnPropertiesValues[propertyKey]?.length ||
        sortDirections[propertyKey] === SortDirections.ROWS
      ) {
        continue;
      }
      if (!valuesOrders[propertyKey]) {
        valuesOrders[propertyKey] = columnPropertiesValues[propertyKey] || [];
      } else {
        columnPropertiesValues[propertyKey].forEach((val) => {
          if (!valuesOrders[propertyKey].includes(val)) {
            valuesOrders[propertyKey].push(val);
          }
        })
      }
    }

    for (const rowProperty of rowsProperties) {
      if (!gaps[rowProperty]) {
        gaps[rowProperty] = findRowGap(prevRowVariant, currentRowVariant, variants);
      }
    }

    for (const columnProperty of columnProperties) {
      if (!gaps[columnProperty]) {
        gaps[columnProperty] = findColumnGap(prevColumnVariant, currentColumnVariant, variants);
      }
    }

    prevColumnVariant = currentColumnVariant;
    prevRowVariant = currentRowVariant;

    if (currentColumnVariant?.x < gaps[ROWS_GAP_FIELD]) {
      gaps[ROWS_GAP_FIELD] = currentColumnVariant.x;
    }
    if (currentRowVariant?.x < gaps[ROWS_GAP_FIELD]) {
      gaps[ROWS_GAP_FIELD] = currentRowVariant.x;
    }
    if (currentColumnVariant?.y < gaps[COLUMNS_GAP_FIELD]) {
      gaps[COLUMNS_GAP_FIELD] = currentColumnVariant.y;
    }
    if (currentRowVariant?.y < gaps[COLUMNS_GAP_FIELD]) {
      gaps[COLUMNS_GAP_FIELD] = currentRowVariant.y;
    }
    currentColumnVariant = currentColumnVariant && next(currentColumnBorders);
    currentRowVariant = currentRowVariant && next(currentRowBorders);
  }

  for(const property of Object.keys(properties)) {
    if (!sortDirections.hasOwnProperty(property)) {
      sortDirections[property] = SortDirections.ROWS;
    }
  }

  return {
    valuesOrders,
    directions: sortDirections,
    gaps
  };
}