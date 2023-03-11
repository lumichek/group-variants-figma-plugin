import { MESSAGE_ERROR } from "../../common/constants";
import { TDirections, TGaps, TPaddings, TPropertiesList, TVariants, TVariantsParent } from "../../common/types";
import { sortVariants } from "../variantsController";
import { checkSelection } from "./utils";

export function onSortMessage(
  page: PageNode,
  {
    properties,
    directions,
    gaps,
    paddings
  }: {
    properties: TPropertiesList,
    directions: TDirections,
    gaps: TGaps,
    paddings: TPaddings
  }
) {
  const isSelected = checkSelection(page);

  if (!isSelected) {
    return;
  }

  const {selection: [selectedNode]} = figma.currentPage;
  const variantsParent = (selectedNode as TVariantsParent);
  const variants = variantsParent.children as TVariants;

  try {
    sortVariants(variantsParent, variants, properties, {directions, gaps, paddings});

    return null;
  } catch (_) {
    return {
      type: MESSAGE_ERROR,
      payload: true
    };
  }

}
