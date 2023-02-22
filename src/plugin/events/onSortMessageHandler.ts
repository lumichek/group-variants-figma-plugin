import { TDirections, TGaps, TPropertiesList } from "../../common/types";
import { sortVariants, moveVariants, resizeVariantsParent } from "../variantsController";
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
  const variantsParent = (selectedNode as ComponentSetNode);
  const variants = variantsParent.children as ComponentNode[];

  const sortedVariants = sortVariants(variants, properties, {directions, gaps});

  moveVariants(sortedVariants);
  resizeVariantsParent(variantsParent, sortedVariants);
}
