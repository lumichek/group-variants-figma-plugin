import {
  SortDirections,
  TOptions,
  TPropertiesList,
  TVariant
} from "../../../common/types";

export function sortVariants(
  variants: ComponentNode[],
  properties: TPropertiesList,
  options: TOptions
): TVariant[] {
  const {directions, gaps} = options;
  const sortedVariants: TVariant[] = [];
  const reversedProperties = properties.reverse();

  for(const variant of variants) {
    let rowIndex = 0;
    let columnIndex = 0;
    let rowStartIndex = 0;
    let columnStartIndex = 0;
    let rowPropertyValuesLength = 0;
    let columnPropertyValuesLength = 0;
    let columnGap = 0;
    let rowGap = 0;

    const {variantProperties: variantPropertiesValues} = variant;

    for(const property of reversedProperties) {
      const {key: propertyKey, values: propertyValues} = property;
      const propertyIndex = propertyValues.indexOf(variantPropertiesValues[propertyKey]) + 1;

      if (directions[propertyKey] === SortDirections.COLUMNS) {
        columnStartIndex = (propertyIndex - 1) * columnPropertyValuesLength;
        columnIndex += columnStartIndex + (columnPropertyValuesLength === 0 ? propertyIndex : 0);
        columnPropertyValuesLength = (columnPropertyValuesLength || 1) * propertyValues.length;

        if (propertyIndex > 1) {
          columnGap = gaps[propertyKey];
        }
      } else {
        rowStartIndex = (propertyIndex - 1) * rowPropertyValuesLength;
        rowIndex += rowStartIndex + (rowPropertyValuesLength === 0 ? propertyIndex : 0);
        rowPropertyValuesLength = (rowPropertyValuesLength || 1) * propertyValues.length;

        if (propertyIndex > 1) {
          rowGap = gaps[propertyKey];
        }
      }
    }

    sortedVariants.push({
      variant,
      columnIndex: columnIndex || 1,
      rowIndex: rowIndex || 1,
      rowGap,
      columnGap
    });
  }

  return sortedVariants;
};