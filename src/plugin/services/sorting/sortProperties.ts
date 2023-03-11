import {
  SortDirections,
  TBorders,
  TDirections,
  TGaps,
  TVariants,
  TPropertiesMap,
  TPropertiesValuesOrders,
  TPaddings
} from "../../../common/types";
import { collectProperties, compareProperties, fillDirections, findColumnGap, findNewPaddings, findNextVariant, findRowGap } from "./utils";

export function sortProperties(variants: TVariants, properties: TPropertiesMap) {
  let sortDirections: TDirections = {};
  let sortDirectionsColumns: TDirections = {};
  let sortDirectionsRows: TDirections = {};
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
  const gaps: TGaps = {};
  let paddings: TPaddings = {
    LEFT: rootRows.x,
    RIGHT: rootRows.x + rootRows.width,
    TOP: rootColumns.y,
    BOTTOM: rootColumns.y + rootColumns.height
  };

  let currentColumnBorders = borders;
  let currentColumnVariant = rootColumns;

  let currentRowBorders = borders;
  let currentRowVariant = rootRows;

  let prevColumnVariant = rootColumns;
  let prevRowVariant = rootRows;

  let valuesOrders: TPropertiesValuesOrders = {};
  let valuesOrdersColumns: TPropertiesValuesOrders = {};
  let valuesOrdersRows: TPropertiesValuesOrders = {};

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
    const sortDirectionsColumnsToAdd = fillDirections(columnProperties, SortDirections.COLUMNS);
    const sortDirectionsRowsToAdd = fillDirections(columnProperties, SortDirections.ROWS);

    sortDirections = {
      ...sortDirectionsRowsToAdd,
      ...sortDirectionsColumnsToAdd,
      ...sortDirections,
    };
    sortDirectionsColumns = {
      ...sortDirectionsColumns,
      ...sortDirectionsColumnsToAdd
    };
    sortDirectionsRows = {
      ...sortDirectionsRows,
      ...sortDirectionsRowsToAdd
    };

    for (const propertyKey of rowsProperties) {
      if (!rowPropertiesValues[propertyKey]?.length) {
        continue;
      }
      if (!valuesOrdersRows[propertyKey]) {
        valuesOrdersRows[propertyKey] = [];
      }
      rowPropertiesValues[propertyKey].forEach((val) => {
        if (!valuesOrdersRows[propertyKey].includes(val)) {
          valuesOrdersRows[propertyKey].push(val);
        }
      })

      if (sortDirections[propertyKey] === SortDirections.COLUMNS) {
        continue;
      }
      if (!valuesOrders[propertyKey]) {
        valuesOrders[propertyKey] = [];
      }
      rowPropertiesValues[propertyKey].forEach((val) => {
        if (!valuesOrders[propertyKey].includes(val)) {
          valuesOrders[propertyKey].push(val);
        }
      })
    }

    for (const propertyKey of columnProperties) {
      if (!columnPropertiesValues[propertyKey]?.length) {
        continue;
      }
      if (!valuesOrdersColumns[propertyKey]) {
        valuesOrdersColumns[propertyKey] = [];
      }
      columnPropertiesValues[propertyKey].forEach((val) => {
        if (!valuesOrdersColumns[propertyKey].includes(val)) {
          valuesOrdersColumns[propertyKey].push(val);
        }
      })
      if (sortDirections[propertyKey] === SortDirections.ROWS) {
        continue;
      }
      if (!valuesOrders[propertyKey]) {
        valuesOrders[propertyKey] = [];
      }
      columnPropertiesValues[propertyKey].forEach((val) => {
        if (!valuesOrders[propertyKey].includes(val)) {
          valuesOrders[propertyKey].push(val);
        }
      })
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

    if (currentRowVariant) {
      paddings = findNewPaddings(paddings, currentRowVariant);
    }
    if (currentColumnVariant) {
      paddings = findNewPaddings(paddings, currentColumnVariant);
    }

    currentColumnVariant = currentColumnVariant && next(currentColumnBorders);
    currentRowVariant = currentRowVariant && next(currentRowBorders);
  }

  for(const propertyKey of Object.keys(valuesOrders)) {
    if (valuesOrdersColumns[propertyKey]?.length && valuesOrdersRows[propertyKey]?.length) {
      if (valuesOrdersColumns[propertyKey].length > valuesOrdersRows[propertyKey].length) {
        sortDirections[propertyKey] = SortDirections.COLUMNS;
        valuesOrders[propertyKey] = valuesOrdersColumns[propertyKey];
      }
      if (valuesOrdersRows[propertyKey].length > valuesOrdersColumns[propertyKey].length) {
        sortDirections[propertyKey] = SortDirections.ROWS;
        valuesOrders[propertyKey] = valuesOrdersRows[propertyKey];
      }
    }
  }

  for(const property of Object.keys(properties)) {
    if (!sortDirections.hasOwnProperty(property)) {
      sortDirections[property] = SortDirections.ROWS;
    }
  }

  return {
    valuesOrders,
    directions: sortDirections,
    gaps,
    paddings
  };
}