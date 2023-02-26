import {
  MESSAGE_CHANGE_PROPERTIES,
  MESSAGE_COMPONENT_NOT_SELECTED,
  MESSAGE_COMPONENT_SELECTED,
  MESSAGE_GET_DIRECTIONS,
  MESSAGE_GET_GAPS,
  MESSAGE_GET_PROPERTIES
} from "../../common/constants";
import { TMessage } from "../../common/types";
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
  const variantsParent = (selectedNode as ComponentSetNode);
  const variants = variantsParent.children as ComponentNode[];

  const {properties, directions, gaps} = getPropertiesInfo(variantsParent, variants);

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
      type: MESSAGE_CHANGE_PROPERTIES,
      payload: {
        properties,
        directions,
        gaps
      }
    }
  ];
}