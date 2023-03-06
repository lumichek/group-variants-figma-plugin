import {
  MESSAGE_CHANGE_PROPERTIES,
  MESSAGE_COMPONENT_NOT_SELECTED,
  MESSAGE_COMPONENT_SELECTED,
  MESSAGE_ERROR,
  MESSAGE_GET_DIRECTIONS,
  MESSAGE_GET_GAPS,
  MESSAGE_GET_PROPERTIES,
  MESSAGE_GET_PROPERTIES_WITH_VALUES
} from "../../common/constants";
import { TMessage, TVariants, TVariantsParent } from "../../common/types";
import { checkSelection, getPropertiesInfo } from "./utils";

export function onSelectionChange(page: PageNode): TMessage | TMessage[] {
  const isSelected = checkSelection(page);

  if (!isSelected) {
    return {
      type: MESSAGE_COMPONENT_NOT_SELECTED,
      payload: false
    };
  }

  const {selection: [selectedNode]} = figma.currentPage;
  const variantsParent = (selectedNode as TVariantsParent);
  const variants = variantsParent.children as TVariants;

  try {
    const {properties, directions, gaps, valuesOrders} = getPropertiesInfo(variantsParent, variants);
    const propertiesWithValues = properties.map(({key, values}) => {
      const calculatedValues = valuesOrders[key] || [];
      if (calculatedValues.length < values.length) {
        values.forEach((val: string) => {
          if (!calculatedValues.includes(val)) {
            calculatedValues.push(val);
          }
        })
      }
      return {
        key,
        values: calculatedValues
      }
    });

    return [
      {
        type: MESSAGE_COMPONENT_SELECTED,
        payload: true
      },
      {
        type: MESSAGE_GET_PROPERTIES,
        payload: properties
      },
      {
        type: MESSAGE_GET_DIRECTIONS,
        payload: directions
      },
      {
        type: MESSAGE_GET_GAPS,
        payload: gaps
      },
      {
        type: MESSAGE_GET_PROPERTIES_WITH_VALUES,
        payload: propertiesWithValues
      },
      {
        type: MESSAGE_CHANGE_PROPERTIES,
        payload: {
          properties: propertiesWithValues,
          directions,
          gaps
        }
      }
    ];
  } catch (_) {
    return {
      type: MESSAGE_ERROR,
      payload: true
    };
  }
}