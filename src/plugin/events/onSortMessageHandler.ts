import { MESSAGE_ERROR } from "../../common/constants";
import { TDirections, TGaps, TPropertiesList, TVariants, TVariantsParent } from "../../common/types";
import { sortVariants } from "../variantsController";
import { checkSelection } from "./utils";

export function onSortMessage(
  page: PageNode,
  properties: TPropertiesList,
  directions: TDirections,
  gaps: TGaps
) {
  const isSelected = checkSelection(page);

  if (!isSelected) {
    return;
  }

  const {selection: [selectedNode]} = figma.currentPage;
  const variantsParent = (selectedNode as TVariantsParent);
  const variants = variantsParent.children as TVariants;

  try {
    sortVariants(variantsParent, variants, properties, {directions, gaps});

    return null;
  } catch (error) {
    throw new Error(error);
    // return {
    //   type: MESSAGE_ERROR,
    //   payload: true
    // };
  }

}
