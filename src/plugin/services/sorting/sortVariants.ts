import { COLUMNS_GAP_FIELD, ROWS_GAP_FIELD } from "../../../common/constants";
import {
  SortDirections,
  TOptions,
  TPropertiesList,
  TVariants,
  TVariantsParent
} from "../../../common/types";
import { mapPropertiesValuesToStr } from "./utils";

export function sortVariants(
  parentVariant: TVariantsParent, variants: TVariants, properties: TPropertiesList, options: TOptions
): void {
  const {directions, gaps} = options;
  const reversedProperties = properties.reverse();

  let rows = [];
  let rowsKeys = [];
  let rowsGaps = [];
  let columns = [];
  let columnsKeys = [];
  let columnsGaps = [];
  let variantsMap = {};

  for (const variant of variants) {
    let variantKey = [];
    let rowVariantKey = [];
    let columnVariantKey = [];

    for (let propertyIndex = 0; propertyIndex < properties.length; propertyIndex++) {
      const {key: propertyKey} = properties[propertyIndex];

      // all props with values
      variantKey.push(`${propertyKey}=${variant.variantProperties[propertyKey]}`);

      // rows props
      if (directions[propertyKey] === SortDirections.ROWS) {
        rowVariantKey.push(`${propertyKey}=${variant.variantProperties[propertyKey]}`);

        const rowVariantKeyStr = [...rowVariantKey].reverse().join(', ');

        if (!variantsMap[rowVariantKeyStr]) {
          variantsMap[rowVariantKeyStr] = [];
        }
        variantsMap[rowVariantKeyStr].push(variant);
      }

      // columns props
      if (directions[propertyKey] === SortDirections.COLUMNS) {
        columnVariantKey.push(`${propertyKey}=${variant.variantProperties[propertyKey]}`);

        const columnVariantKeyStr = [...columnVariantKey].reverse().join(', ');

        if (!variantsMap[columnVariantKeyStr]) {
          variantsMap[columnVariantKeyStr] = [];
        }
        variantsMap[columnVariantKeyStr].push(variant);
      }
    }

    const rowVariantKeyStr = [...rowVariantKey].reverse().join(', ');
    const columnVariantKeyStr = [...columnVariantKey].reverse().join(', ');

    variantsMap[[rowVariantKeyStr, columnVariantKeyStr].join(', ')] = [variant];

    variantsMap[variantKey.reverse().join(', ')] = [variant];
  }

  for (let propertyIndex = 0; propertyIndex < reversedProperties.length; propertyIndex++) {
    const {key: propertyKey, values: propertyValues} = properties[propertyIndex];

    if (directions[propertyKey] === SortDirections.ROWS) {
      if (rows.length === 0) {
        rows = propertyValues.map((propertyValue) => ([{
          key: propertyKey,
          value: propertyValue
        }]));
        rowsGaps = propertyValues.map(() => gaps[propertyKey]);
        rowsKeys = rows.map(mapPropertiesValuesToStr);
      } else {
        const nestedPropertyValues = rows;
        const nestedPropertyGaps = rowsGaps;
        rows = [];
        rowsKeys = [];
        rowsGaps = [];

        for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
          for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
            const row = [
              {
                key: propertyKey,
                value: propertyValues[valueIndex]
              },
              ...nestedPropertyValues[nestedIndex]
            ];
            const rowKey = mapPropertiesValuesToStr(row);

            if (variantsMap[rowKey]) {
              rows.push(row);
              rowsKeys.push(rowKey);
              rowsGaps.push(nestedPropertyGaps[nestedIndex]);
            }
          }
          rowsGaps[rowsGaps.length - 1] = gaps[propertyKey];
        }
      }
    } else if (directions[propertyKey] === SortDirections.COLUMNS) {
      if (columns.length === 0) {
        columns = propertyValues.map((propertyValue) => [{
          key: propertyKey,
          value: propertyValue
        }]);
        columnsGaps = propertyValues.map(() => gaps[propertyKey]);
        columnsKeys = columns.map(mapPropertiesValuesToStr);
      } else {
        const nestedPropertyValues = columns;
        const nestedPropertyGaps = columnsGaps;
        columns = [];
        columnsKeys = [];
        columnsGaps = [];

        for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
          for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
            const column = [
              {
                key: propertyKey,
                value: propertyValues[valueIndex]
              },
              ...nestedPropertyValues[nestedIndex]
            ];
            const columnKey = mapPropertiesValuesToStr(column);

            if (variantsMap[columnKey]) {
              columns.push(column);
              columnsKeys.push(columnKey);
              columnsGaps.push(nestedPropertyGaps[nestedIndex]);
            }
          }
          console.log('COL GAP',
          gaps[propertyKey], propertyKey, propertyValues[valueIndex],
          [...columns], [...columnsGaps],
          [...nestedPropertyValues]);
          columnsGaps[columnsGaps.length - 1] = gaps[propertyKey];
        }
      }
    }
  }

  const columnsMaxWidths = [];

  for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    const columnVariants = variantsMap[columnsKeys[columnIndex]];
    let maxColumnWidth = 0;

    for (const variant of columnVariants) {
      if (variant.width > maxColumnWidth) {
        maxColumnWidth = variant.width;
      }
    }

    columnsMaxWidths[columnIndex] = maxColumnWidth;
  }

  let xCoord = gaps[ROWS_GAP_FIELD];
  let yCoord = gaps[COLUMNS_GAP_FIELD];

  if (rows.length === 0) {
    rows.push(null);
  }

  if (columns.length === 0) {
    columns.push(null);
  }

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    let maxRowHeight = 0;
    let maxColumnWidth = 0;
    let isEmptyRow = true;

    xCoord = gaps[ROWS_GAP_FIELD];

    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
      const row = rows[rowIndex];
      const column = columns[columnIndex];
      const variantKey = mapPropertiesValuesToStr([...(row || []), ...(column || [])]);
      const [variant] = variantsMap[variantKey] || [];

      if (variant) {
        isEmptyRow = false;

        if (variant.height > maxRowHeight) {
          maxRowHeight = variant.height;
        }

        variant.x = xCoord;
        variant.y = yCoord;
      }

      if (columnsMaxWidths[columnIndex]) {
        xCoord += columnsMaxWidths[columnIndex];
      } else {
        if (variant?.width > maxColumnWidth) {
          maxColumnWidth = variant?.width;
        }
      }

      if (columnIndex !== columns.length - 1) {
        xCoord += columnsGaps[columnIndex];
      }
    }

    if (!isEmptyRow) {
      yCoord += maxRowHeight;

      if (rowIndex !== rows.length - 1) {
        yCoord += rowsGaps[rowIndex];
      }
    }

    if (maxColumnWidth > 0) {
      xCoord += maxColumnWidth;
    }
  }

  parentVariant.resizeWithoutConstraints(
    xCoord + gaps[ROWS_GAP_FIELD],
    yCoord + gaps[COLUMNS_GAP_FIELD]
  );
};
