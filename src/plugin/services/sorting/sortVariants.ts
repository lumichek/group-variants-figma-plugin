import { COLUMNS_GAP_FIELD, ROWS_GAP_FIELD } from "../../../common/constants";
import {
  SortDirections,
  TOptions,
  TPropertiesList,
  TVariants,
  TVariantsParent
} from "../../../common/types";
import { findAllVariantsByPropertyValue, findVariantByPropertyValue } from "./utils";

export function sortVariants(
  parentVariant: TVariantsParent, variants: TVariants, properties: TPropertiesList, options: TOptions
): void {
  const {directions, gaps} = options;
  const reversedProperties = properties.reverse();

  let rows = [];
  let rowsGaps = [];
  let columns = [];
  let columnsGaps = [];

  for (let propertyIndex = 0; propertyIndex < reversedProperties.length; propertyIndex++) {
    const {key: propertyKey, values: propertyValues} = properties[propertyIndex];

    if (directions[propertyKey] === SortDirections.ROWS) {
      if (rows.length === 0) {
        rows = propertyValues.map((propertyValue) => ([{
          key: propertyKey,
          value: propertyValue
        }]));
        rowsGaps = propertyValues.map(() => gaps[propertyKey]);
      } else {
        const nestedPropertyValues = rows;
        const nestedPropertyGaps = rowsGaps;
        rows = [];
        rowsGaps = [];

        for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
          for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
            rows.push([{
              key: propertyKey,
              value: propertyValues[valueIndex]
            }, ...nestedPropertyValues[nestedIndex]]);
            if (nestedIndex === nestedPropertyValues.length - 1) {
              rowsGaps.push(gaps[propertyKey]);
            } else {
              rowsGaps.push(nestedPropertyGaps[nestedIndex]);
            }
          }
        }
      }
    } else if (directions[propertyKey] === SortDirections.COLUMNS) {
      if (columns.length === 0) {
        columns = propertyValues.map((propertyValue) => [{
          key: propertyKey,
          value: propertyValue
        }]);
        columnsGaps = propertyValues.map(() => gaps[propertyKey]);
      } else {
        const nestedPropertyValues = columns;
        const nestedPropertyGaps = columnsGaps;
        columns = [];
        columnsGaps = [];

        for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
          for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
            columns.push([{
              key: propertyKey,
              value: propertyValues[valueIndex]
            }, ...nestedPropertyValues[nestedIndex]]);
            if (nestedIndex === nestedPropertyValues.length - 1) {
              columnsGaps.push(gaps[propertyKey]);
            } else {
              columnsGaps.push(nestedPropertyGaps[nestedIndex]);
            }
          }
        }
      }
    }
  }

  const columnsVariants = [];

  for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    const column = columns[columnIndex];
    const columnVariants = findAllVariantsByPropertyValue(variants, column);
    let maxColumnWidth = 0;

    for (const variant of columnVariants) {
      if (variant.width > maxColumnWidth) {
        maxColumnWidth = variant.width;
      }
    }

    columnsVariants.push({
      variants: columnVariants,
      maxColumnWidth
    });
  }

  let xCoord = gaps[ROWS_GAP_FIELD];
  let yCoord = gaps[COLUMNS_GAP_FIELD];

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    let maxRowHeight = 0;
    let isEmptyRow = true;

    xCoord = gaps[ROWS_GAP_FIELD];

    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
      const row = rows[rowIndex];
      const columnVariants = columnsVariants[columnIndex];

      if (columnVariants.variants.length > 0) {
        const variant = findVariantByPropertyValue(columnVariants.variants, row);

        if (variant) {
          isEmptyRow = false;

          if (variant.height > maxRowHeight) {
            maxRowHeight = variant.height;
          }

          variant.x = xCoord;
          variant.y = yCoord;
        }

        xCoord += columnVariants.maxColumnWidth;

        if (columnIndex !== columns.length - 1) {
          xCoord += columnsGaps[columnIndex];
        }
      }
    }

    if (!isEmptyRow) {
      yCoord += maxRowHeight;

      if (rowIndex !== rows.length - 1) {
        yCoord += rowsGaps[rowIndex];
      }
    }
  }

  parentVariant.resizeWithoutConstraints(
    xCoord + gaps[ROWS_GAP_FIELD],
    yCoord + gaps[COLUMNS_GAP_FIELD]
  );
};
